// src/components/ChatBubble.js
import React, { useState, useEffect, useRef } from "react";
import ChatWindow from "./ChatWindow"; // Import ChatWindow component
import "./ChatBubble.css"; // Import file CSS (giữ nguyên)
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link } from "react-router-dom";
import { supabase } from "../backend/initSupabase";
import { getAnonymousUserId } from "../backend/AnonymousUser";

export default function ChatBubble() {
  const { userData } = useContext(AuthContext);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [open, setOpen] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(false);
  const [unreadCount, setUnreadCounts] = useState(0);
  const [anonymousUserId, setAnonymousUserId] = useState(null);

  const chatWindowRef = useRef(null);
  const chatBubbleRef = useRef(null);

  useEffect(() => {
    const userId = userInfo ? userInfo.email : getAnonymousUserId();
    setAnonymousUserId(userId);
    console.log("Anonymous User ID:", userId);
  }, []);

  // Add useEffect for subscription
  useEffect(() => {
    // Initial fetch of unread messages
    const fetchUnreadCount = async () => {
      console.log("Fetching unread messages for:", anonymousUserId);

      try {
        const { data, count, error } = await supabase
          .from("messages")
          .select("*", { count: "exact" })
          .eq("receiver_id", anonymousUserId)
          .eq("read", false);

        console.log("Query results:", {
          data: data,
          count: count,
          error: error,
        });

        if (error) {
          console.error("Error fetching unread count:", error);
        } else {
          console.log("Final unread count:", count || 0);
        }

        setUnreadCounts(count || 0);
      } catch (err) {
        console.error("Exception in fetchUnreadCount:", err);
      }
    };

    fetchUnreadCount();

    // Realtime subscription
    const subscription = supabase
      .channel("user-unread-messages")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
          filter: `receiver_id=eq.${anonymousUserId}`,
        },
        (payload) => {
          if (payload.eventType === "INSERT" && !payload.new.read) {
            setUnreadCounts((prev) => prev + 1);
          } else if (payload.eventType === "UPDATE" && payload.new.read) {
            setUnreadCounts((prev) => Math.max(prev - 1, 0));
          }
        }
      )
      .subscribe();

    return () => supabase.removeChannel(subscription);
  }, [anonymousUserId]);

  useEffect(() => {
    // Define the admin receiver email
    const adminReceiver = "admin1@valleybook.com";

    // Subscribe to realtime changes for the messages table where receiver_id is adminReceiver
    const subscription = supabase
      .channel("admin-unread-messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `receiver_id=eq.${adminReceiver}`,
        },
        (payload) => {
          // When a new message is inserted and read is false, update unreadCount
          if (payload.new && payload.new.read === false) {
            setUnreadCounts((prev) => prev + 1);
          }
        }
      )
      .subscribe();

    // Optionally, you can also subscribe to UPDATE events for marking messages as read
    const updateSubscription = supabase
      .channel("admin-updates")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "messages",
          filter: `receiver_id=eq.${adminReceiver}`,
        },
        (payload) => {
          if (payload.new && payload.new.read) {
            // Reduce the unread count when messages get marked as read
            setUnreadCounts((prev) => Math.max(prev - 1, 0));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
      supabase.removeChannel(updateSubscription);
    };
  }, []);

  // ---- Logic hiển thị/ẩn tin nhắn ban đầu và cửa sổ chat ----
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialMessage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Ẩn tin nhắn ban đầu khi cửa sổ chat chính mở
    if (open) {
      setShowInitialMessage(false);
    }
  }, [open]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        chatBubbleRef.current &&
        !chatBubbleRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, chatWindowRef, chatBubbleRef]);
  // ---- Kết thúc logic hiển thị/ẩn ----

  const bubbleStyle = {
    textAlign: "center",
    position: "relative",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#007bff", // Always use blue background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    zIndex: 1000,
    transition: "transform 0.3s ease-in-out",
    transform: open ? "rotate(360deg)" : "rotate(0deg)",
  };

  const handleCloseInitialMessage = () => {
    setShowInitialMessage(false);
    setOpen(true);
  };

  const markAdminMessagesAsRead = async () => {
    console.log("marking admin message as read ====");

    try {
      const { error } = await supabase
        .from("messages")
        .update({ read: true })
        .eq("receiver_id", anonymousUserId)
        .eq("read", false);

      if (!error) {
        setUnreadCounts(0);
      }
    } catch (err) {
      console.error("Error marking messages as read:", err);
    }

    setOpen(!open);
  };

  if (userData?.email?.startsWith("admin")) {
    return (
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <div className="chat-bubble-container">
          <Link
            to="/adminChat"
            style={{ textDecoration: "none" }}
            aria-label="Open chat"
          >
            <div style={bubbleStyle}>
              <span className="">
                {open ? (
                  "×"
                ) : (
                  <img
                    src="https://asrqcfdysjuddpjxnnkx.supabase.co/storage/v1/object/sign/image/adminChatIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZS9hZG1pbkNoYXRJY29uLnBuZyIsImlhdCI6MTc0NjM2NjQ4OCwiZXhwIjoxNzc3OTAyNDg4fQ.hV0RwjDhBLoPLJVOVoOj77LjKsAhXAOX9dGCX1Qyti8"
                    alt="Chat Icon"
                    style={{
                      width: "28px",
                      height: "28px",
                      filter: "invert(1)",
                      transform: "scale(1.2)",
                    }}
                  />
                )}
              </span>
              {unreadCount > 0 && (
                <div className="unread-dot" aria-label="Unread messages"></div>
              )}
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: "fixed", bottom: "5px", right: "0px" }}>
      {/* Chat window */}
      <div className={`chat-window ${open ? "open" : ""}`} ref={chatWindowRef}>
        <div style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
          <span
            style={{ float: "right", cursor: "pointer", fontSize: "1.2em" }}
            onClick={() => setOpen(false)}
          >
            ×
          </span>
        </div>
        <ChatWindow isOpen={open} />
      </div>

      {/* Chat bubble */}
      <div className="chat-bubble-container">
        <div
          style={{
            ...bubbleStyle,
          }}
          onClick={markAdminMessagesAsRead}
          ref={chatBubbleRef}
        >
          <span className={open ? "chat-icon-no-rotate" : "chat-icon-rotate"}>
            {open ? "×" : "💬"}
          </span>

          {unreadCount > 0 && (
            <>
              <span className="unread-bubble">{unreadCount}</span>
              <div className="unread-dot"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
