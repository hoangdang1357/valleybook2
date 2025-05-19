import { useRef, useState, useEffect } from "react";
import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import Policy from "./pages/Policy";
import ForgetPassword from "./pages/ForgetPassword";
import { AuthProvider } from "./components/AuthContext";
import NewBook from "./pages/NewBook";
import Cart from "./pages/Cart";
import NotifyOrderSuccess from "./pages/NotifyOrderSuccess";
import { BookProvider } from "./backend/BookContext";
import PrestigeBrand from "./pages/PrestigeBrand";
import Checkout from "./pages/Checkout";
import QualityProduct from "./pages/QualityProduct";
import InnovationPage from "./pages/InnovationPage";
import AdminApp from "./AdminApp.jsx"; // Điều chỉnh đường dẫn nếu cần
import AdminChatScreen from "./pages/AdminChatScreen.jsx"; // Điều chỉnh đường dẫn nếu cần
import SetNewPassword from "./pages/SetNewPassword.jsx"; // Điều chỉnh đường dẫn nếu cần
import ForumPage from "./pages/ForumPage.jsx";
import { ForumProvider } from "./backend/ForumContext.jsx";
import ForumDetailPage from "./pages/ForumDetailPage.jsx";
import Confirmation from "./pages/Confirmation";
import Profile from "./pages/Profile";
import OrderSuccess from "./pages/OrderSuccess";
import OrderTracking from "./pages/OrderTracking";
import OrderList from "./pages/OrderList";
import ScrollToTop from "./components/ScrollToTop.jsx";
import { scan } from "react-scan";
import SpecificBook from "./pages/SpecificBook";

scan({
  enabled: true,
});
function App() {
  const audioRef = useRef(null);

  return (
    <AuthProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/shop"
            element={
              <BookProvider>
                <Shop />
              </BookProvider>
            }
          />
          <Route path="/shop/:id" element={<ProductDetails />} />
          {/* <Route path="/admin/books/:id" element={<Cart />} /> */}
          <Route path="/specificBook" element={<SpecificBook />} />
          {/* <Route path="/admin/books/:id" element={<EditBook />} /> */}
          {/* <Route path="/admin/accounts/:id" element={<EditAccount />} />{" "}
          <Route path="/admin/orders/:id" element={<EditOrder />} />{" "}
          <Route path="/admin/voucher/:id" element={<EditVoucher />} />
          <Route path="/admin/authors/:id" element={<EditAuthor />} /> */}
          {/* New route for editing orders */}
          {/* Updated route for accounts */}
          <Route path="/signIn" element={<LoginPage />} />
          <Route path="/signUp" element={<Signup></Signup>}></Route>
          <Route path="/policy" element={<Policy />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/newBook" element={<NewBook />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/prestigeBrand" element={<PrestigeBrand />} />
          <Route path="/qualityProduct" element={<QualityProduct />} />
          <Route path="/innovationPage" element={<InnovationPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/adminChat" element={<AdminChatScreen />} />
          <Route path="/setNewPassword" element={<SetNewPassword />} />
          <Route
            path="/forum"
            element={
              <ForumProvider>
                <ForumPage></ForumPage>
              </ForumProvider>
            }
          ></Route>
          <Route
            path="/forum/:id"
            element={<ForumDetailPage></ForumDetailPage>}
          ></Route>
          {/* THÊM ROUTE CHO ADMIN PANEL */}
          <Route
            path="/admin/*" // <-- ĐẢM BẢO ĐƯỜNG DẪN CHÍNH XÁC
            element={
              // Tạm thời không bọc ProtectedAdminRoute để dễ test
              <AdminApp />
            }
          />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/tracking/:orderId" element={<OrderTracking />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/notifyOrderSuccess" element={<NotifyOrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
