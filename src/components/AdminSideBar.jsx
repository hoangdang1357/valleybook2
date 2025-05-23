// src/components/AdminSidebar.jsx
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { supabase } from "../backend/initSupabase";
import "./AdminSidebar.css";

function AdminSidebar({ onSelectUser = () => {}, selectedUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [unreadCounts, setUnreadCounts] = useState({});

  // Helper function to sort users
  const sortUsersByUnread = (userList, unreadCountsMap) => {
    return [...userList].sort((a, b) => {
      // Always put admin1@valleybook.com at the top
      if (a === "admin1@valleybook.com") return -1;
      if (b === "admin1@valleybook.com") return 1;
      const aUnread = unreadCountsMap[a] || 0;
      const bUnread = unreadCountsMap[b] || 0;

      if (aUnread > 0 && bUnread === 0) return -1;
      if (aUnread === 0 && bUnread > 0) return 1;
      return 0;
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("messages")
        .select("username")
        .or(
          `receiver_id.eq.admin1@valleybook.com,username.eq.admin1@valleybook.com`
        )
        .order("created_at", { ascending: false });
      console.log("data ===", data);

      // Add to your existing fetchUsers function
      const { data: unreadData } = await supabase
        .from("messages")
        .select("username")
        .eq("receiver_id", "admin1@valleybook.com")
        .eq("read", false);

      // Manually count messages per user
      const countsMap = unreadData.reduce((acc, item) => {
        acc[item.username] = (acc[item.username] || 0) + 1;
        return acc;
      }, {});
      setUnreadCounts(countsMap);

      if (error) {
        console.error("Error fetching users:", error.message);
        setError("Lỗi khi tải danh sách người dùng.");
        setUsers([]);
      } else {
        const uniqueUsers = [...new Set(data.map((item) => item.username))];
        const filteredUsers = uniqueUsers.filter(
          (username) => username && username.trim() !== ""
        );

        // Sort users with unread messages to top
        const sortedUsers = sortUsersByUnread(filteredUsers, countsMap);
        setUsers(sortedUsers);
      }
      setLoading(false);
    };

    // Subscription cho unread messages
    const unreadSubscription = supabase
      .channel("unread-messages")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
          filter: "receiver_id=eq.admin1@valleybook.com",
        },
        (payload) => {
          if (payload.eventType === "INSERT" && !payload.new.read) {
            setUnreadCounts((prev) => {
              const newCounts = {
                ...prev,
                [payload.new.username]: (prev[payload.new.username] || 0) + 1,
              };
              // Re-sort users when unread count changes
              setUsers((prevUsers) => sortUsersByUnread(prevUsers, newCounts));
              return newCounts;
            });
          } else if (payload.eventType === "UPDATE" && payload.new.read) {
            setUnreadCounts((prev) => {
              const newCounts = {
                ...prev,
                [payload.new.username]: Math.max(
                  (prev[payload.new.username] || 0) - 1,
                  0
                ),
              };
              // Re-sort users when unread count changes
              setUsers((prevUsers) => sortUsersByUnread(prevUsers, newCounts));
              return newCounts;
            });
          }
        }
      )
      .subscribe();

    // Subscription for new users
    const newUsersSubscription = supabase
      .channel("new-users")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          const newUser = payload.new.username;
          if (newUser && newUser.trim() !== "" && !newUser.includes("admin")) {
            setUsers((prevUsers) => {
              if (!prevUsers.includes(newUser)) {
                const updatedUsers = [...prevUsers, newUser];
                return sortUsersByUnread(updatedUsers, unreadCounts);
              }
              return prevUsers;
            });
          }
        }
      )
      .subscribe();

    fetchUsers();

    // Cleanup subscriptions
    return () => {
      supabase.removeChannel(unreadSubscription);
      supabase.removeChannel(newUsersSubscription);
    };
  }, []);

  return (
    <div className="admin-sidebar">
      <h3 className="admin-sidebar__header">Người dùng</h3>
      {loading && <p className="admin-sidebar__loading">Đang tải...</p>}
      {error && <p className="admin-sidebar__error">{error}</p>}

      {!loading && users.length === 0 && !error && (
        <p className="admin-sidebar__empty">Chưa có người dùng nào.</p>
      )}

      {!loading && users.length > 0 && (
        <ul className="admin-sidebar__list">
          {users.map((user) => (
            <li
              key={user}
              className={`admin-sidebar__item ${
                selectedUserId === user ? "admin-sidebar__item--active" : ""
              }`}
              onClick={async () => {
                console.log("User clicked:", user);
                console.log("Current selectedUserId:", selectedUserId);
                console.log("Comparison result:", selectedUserId === user);
                onSelectUser(user);
                const { data, error } = await supabase
                  .from("messages")
                  .update({ read: true })
                  .eq("username", user);
                if (error)
                  console.error("Error marking messages as read:", error);
                console.log("Marked messages as read:", data);
              }}
            >
              {unreadCounts[user] > 0 && (
                <span
                  className="unread-badge"
                  style={{ marginRight: "5px", marginLeft: "0px" }}
                >
                  {unreadCounts[user] || 0}
                </span>
              )}
              {user}

              {selectedUserId === user &&
                console.log(
                  "Applied className:",
                  `admin-sidebar__item ${
                    selectedUserId === user ? "admin-sidebar__item--active" : ""
                  }`
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Add prop validation
AdminSidebar.propTypes = {
  onSelectUser: PropTypes.func,
  selectedUserId: PropTypes.string,
};

// Add default props
AdminSidebar.defaultProps = {
  onSelectUser: () => {},
  selectedUserId: "",
};

export default AdminSidebar;
