import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../../public/assets/css/Contact.css";
import ChatBubble from "../components/ChatBubble";

function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <Header currentPage="contact" />

      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Liên hệ với chúng tôi</h3>
              <span className="breadcrumb">
                <a href="#">Trang chủ liên hệ</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text">
                <div className="section-heading">
                  <h6>Liên hệ với chúng tôi</h6>
                  <h2>Xin chào!</h2>
                </div>
                <p>
                  Valley Book là trang web bán sách trực tuyến, nơi bạn có thể
                  dễ dàng tìm thấy những cuốn sách hay, phù hợp với mọi độ tuổi
                  và sở thích...
                </p>
                <ul>
                  <li>
                    <span>Địa chỉ</span> Toà nhà Đại học Công nghệ Đông Á, Nam
                    Từ Liêm, Hà Nội
                  </li>
                  <li>
                    <span>Số điện thoại</span> 0869003199
                  </li>
                  <li>
                    <span>Email</span> hoangdang1368@gmail.com
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14894.877254424797!2d105.7438101!3d21.0439141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135096b31fa7abb%3A0xff645782804911af!2zVHLGsOG7nW5nIMSR4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgxJDDtG5nIMOB!5e0!3m2!1svi!2s!4v1744031958504!5m2!1svi!2s"
                        width="100%"
                        height="325px"
                        frameBorder="0"
                        style={{ border: 0, borderRadius: "23px" }}
                        allowFullScreen=""
                        title="Google Map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBubble />
      <Footer />
    </div>
  );
}

export default Contact;
