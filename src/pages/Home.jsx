// src/pages/Home.jsx
import React, { useState, useEffect, useContext } from "react";

// Import all required components
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import Features from "../components/Features";
import Footer from "../components/Footer";
import supabase from "../backend/initSupabase";
import BestSellerCarousel from "../components/BestSellerCarousel";
import CustomerSaying from "../components/CustomerSaying";
import ChatBubble from "../components/ChatBubble";
import CarouselPosts from "../components/CarouselPosts";

import EventPopup from "../components/EventPopup";

function Home() {
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State cho pop-up

  // useEffect ban đầu của bạn để lấy dữ liệu
  useEffect(() => {
    async function getData() {
      // Logic lấy dữ liệu của bạn với Supabase
      // (Giữ nguyên phần này từ file Home.jsx gốc của bạn)
      try {
        const currentUser = await supabase.auth.getUser(); // Sử dụng await ở đây
        if (currentUser.data.user) {
          // Kiểm tra user tồn tại trong data
          const loginInfo = currentUser.data.user.email;
          console.log(loginInfo);
          const { data: loginData, error } = await supabase // Xử lý error nếu có
            .from("accounts")
            .select()
            .eq("username", loginInfo);
          if (error) {
            console.error("Lỗi khi lấy dữ liệu tài khoản:", error);
          }
          if (loginData) {
            console.log(`Workspaceed: ${JSON.stringify(loginData)} `); // An toàn hơn khi log object
          }
        }
      } catch (e) {
        console.error("Lỗi trong useEffect getData:", e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  // useEffect mới để xử lý hiển thị pop-up
  useEffect(() => {
    // Kiểm tra xem pop-up đã hiển thị trong session này chưa
    const popupShownThisSession = sessionStorage.getItem(
      "eventPopupShownThisSession"
    );

    if (!popupShownThisSession) {
      // Nếu chưa hiển thị trong session này, đặt hẹn giờ để hiển thị sau 1 giây
      const timer = setTimeout(() => {
        setShowPopup(true);
        // Đánh dấu là đã hiển thị trong session này
        sessionStorage.setItem("eventPopupShownThisSession", "true");
      }, 1000); // Hiển thị sau 1000ms = 1 giây (bạn có thể đổi thành 0 nếu muốn hiện ngay)

      // Dọn dẹp timer khi component unmount
      return () => clearTimeout(timer);
    }
  }, []); // Mảng rỗng đảm bảo useEffect này chỉ chạy một lần sau khi component mount

  const handleClosePopup = () => {
    setShowPopup(false);
    // Không cần làm gì với sessionStorage ở đây nữa vì nó sẽ tự xóa khi đóng tab
  };

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header currentPage="home" />
          <MainBanner />
          <Features />
          <BestSellerCarousel />
          <CarouselPosts />
          <CustomerSaying />
          <Footer />
          <ChatBubble />

          {/* Hiển thị pop-up nếu showPopup là true */}
          {showPopup && <EventPopup onClose={handleClosePopup} />}
        </>
      )}
    </div>
  );
}

export default Home;
