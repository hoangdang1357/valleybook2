import React from "react";
import { Link } from "react-router-dom";
import bookLogo from "/assets/images/bookLogo.png";
import ScrollToTop from "./ScrollToTop";
export default function Footer() {
  return (
    <>
      <ScrollToTop />
      <div
        className="first-footer d-flex"
        style={{
          boxSizing: "border-box",
          paddingTop: "34px",
          display: "flex",
          backgroundColor: "#0171F9",
          marginTop: "50px",
          borderTopLeftRadius: "100px",
          borderTopRightRadius: "100px",
        }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1290px",
            padding: "0px 10px",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginRight: "-10px",
              marginLeft: "-10px",
            }}
          >
            <div
              className="col-lg-3 col-md-5 col-12 first-col"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                minHeight: "1px",
                flex: "0 0 25%",
                WebkitBoxFlex: "0",
                maxWidth: "25%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <a
                className="logo"
                href="#"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  display: "block",
                  marginBottom: "20px",
                  position: "relative",
                }}
              >
                <img
                  alt="Valley book"
                  src={bookLogo}
                  style={{
                    marginLeft: "25px",
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    maxWidth: "30%",
                    width: "auto",
                    height: "unset",
                  }}
                />
              </a>
              <ul
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "1rem",
                  listStyle: "outside none",
                  padding: "0px",
                }}
              >
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 12px",
                    listStyle: "none",
                    display: "flex",
                    marginBottom: "12px",
                  }}
                >
                  <svg
                    className="icon"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      width: "30px",
                      height: "24px",
                    }}
                  >
                    {" "}
                    <use
                      xlinkHref="#location-icon"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                  </svg>
                  <a
                    href="https://maps.app.goo.gl/5QGpCUbRbiyqGUYaA"
                    target="_blank"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      display: "block",
                      width: "calc(100% - 30px)",
                      lineHeight: 1.5,
                      marginTop: "0px",
                      marginBottom: "0px",
                      fontSize: "14px",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      textDecoration: "none", // Optional: removes underline
                    }}
                  >
                    Toà nhà Đại học Công nghệ Đông Á, <br /> Nam Từ Liêm, Hà Nội
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 12px",
                    listStyle: "none",
                    display: "flex",
                    marginBottom: "12px",
                  }}
                >
                  <svg
                    className="icon"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      width: "30px",
                      height: "24px",
                    }}
                  >
                    {" "}
                    <use
                      xlinkHref="#email-icon"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                  </svg>
                  <a
                    href="mailto:hoangdang1368@gmail.com"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      margin: "0px",
                      padding: "0px",
                      display: "block",
                      width: "calc(100% - 30px)",
                      lineHeight: 1.5,
                      fontSize: "14px",
                      fontFamily: "'civil-regular', sans-serif",
                    }}
                  >
                    hoangdang1368@gmail.com
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 12px",
                    listStyle: "none",
                    display: "flex",
                    marginBottom: "12px",
                  }}
                >
                  <svg
                    className="icon"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      width: "30px",
                      height: "24px",
                    }}
                  >
                    {" "}
                    <use
                      xlinkHref="#phone-icon"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                  </svg>
                  <a
                    className="phone"
                    href="tel:0869003199"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      margin: "0px",
                      padding: "0px",
                      display: "block",
                      width: "calc(100% - 30px)",
                      lineHeight: 1.5,
                      fontSize: "14px",
                      fontFamily: "'civil-regular', sans-serif",
                    }}
                  >
                    {"0869003199"}
                  </a>
                </li>
                <li
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 12px",
                    listStyle: "none",
                    display: "flex",
                    marginBottom: "12px",
                  }}
                >
                  <svg
                    className="icon"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      width: "30px",
                      height: "24px",
                    }}
                  >
                    {" "}
                    <use
                      xlinkHref="#mobile-icon"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{ boxSizing: "border-box" }}
                    />{" "}
                  </svg>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-3 col-12"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                minHeight: "1px",
                flex: "0 0 25%",
                WebkitBoxFlex: "0",
                maxWidth: "25%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <h4
                className="title-menu"
                style={{
                  boxSizing: "border-box",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: "'civil-bold', sans-serif",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  marginBottom: "16px",
                  marginTop: "45px",
                  color: "white",
                }}
              >
                <span style={{ boxSizing: "border-box" }}>{"Giới thiệu"}</span>
              </h4>
              <ul
                className="list-menu"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "1rem",
                  listStyle: "outside none",
                  padding: "0px",
                }}
              >
                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <Link
                    to="/contact" // Thay href bằng to và cập nhật đường dẫn
                    title="Về Valley Book"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Về Valley Book
                  </Link>
                </li>
                {/* <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <a
                    href="https://nhanam.vn/he-thong-hieu-sach"
                    title="Hệ thống hiệu sách"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Hệ thống hiệu sách
                  </a>
                </li> */}
                {/* <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <a
                    href="https://nhanam.vn/he-thong-cua-hang"
                    title="Hệ thống phát hành"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Hệ thống phát hành
                  </a>
                </li> */}

                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <Link
                    to="/contact#"
                    title="Liên hệ với chúng tôi"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Liên hệ với chúng tôi
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-4 col-12"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                minHeight: "1px",
                flex: "0 0 25%",
                WebkitBoxFlex: "0",
                maxWidth: "25%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <h4
                className="title-menu"
                style={{
                  boxSizing: "border-box",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: "'civil-bold', sans-serif",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  marginBottom: "16px",
                  marginTop: "45px",
                  color: "white",
                }}
              >
                <span style={{ boxSizing: "border-box" }}>
                  {"CHÍNH SÁCH"}
                  <i
                    className="fa fa-plus hidden"
                    aria-hidden="true"
                    style={{
                      boxSizing: "border-box",
                      fontVariant: "normal",
                      WebkitFontSmoothing: "antialiased",
                      fontStyle: "normal",
                      textRendering: "auto",
                      lineHeight: 1,
                      fontFamily: '"Font Awesome 5 Free"',
                      fontWeight: 900,
                      display: "none",
                    }}
                  />
                </span>
              </h4>
              <ul
                className="list-menu"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "1rem",
                  listStyle: "outside none",
                  padding: "0px",
                }}
              >
                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <Link
                    to="/policy#bao-mat"
                    title="Chính sách bảo mật"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Chính sách bảo mật
                  </Link>
                </li>

                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <Link
                    to="/policy#doi-tra"
                    title="Chính sách đổi trả/hoàn tiền"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Chính sách đổi trả/hoàn tiền
                  </Link>
                </li>

                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <a
                    href="/policy#khuyen-mai"
                    title="Chính sách thanh toán/ Khuyến mãi"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Chính sách khuyến mãi
                  </a>
                </li>

                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <a
                    href="/policy#van-chuyen"
                    title="Chính sách thanh toán/ vận chuyển"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Chính sách vận chuyển
                  </a>
                </li>
                <li
                  className="li_menu"
                  style={{ boxSizing: "border-box", margin: "0px 0px 12px" }}
                >
                  <Link
                    to="/policy#CSKH"
                    title="Chính sách chăm sóc khách hàng"
                    style={{
                      boxSizing: "border-box",
                      textDecoration: "none",
                      backgroundColor: "transparent",
                      color: "white",
                      fontFamily: "'civil-regular', sans-serif",
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Chăm sóc khách hàng
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-12 col-12"
              style={{
                boxSizing: "border-box",
                position: "relative",
                width: "100%",
                minHeight: "1px",
                flex: "0 0 25%",
                WebkitBoxFlex: "0",
                maxWidth: "25%",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <h4
                className="title-menu faild"
                style={{
                  boxSizing: "border-box",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  fontFamily: "'civil-bold', sans-serif",
                  textTransform: "uppercase",
                  fontSize: "16px",
                  marginBottom: "16px",
                  marginTop: "45px",
                  color: "white",
                }}
              >
                <span style={{ boxSizing: "border-box" }}>{"Mạng xã hội"}</span>
              </h4>
              <div className="payment" style={{ boxSizing: "border-box" }}>
                <img
                  className="lazyload loaded"
                  alt="Phương thức thanh toán"
                  src="/assets/images/Facebook.png"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    background: "transparent",
                    width: "40px",
                    height: "unset",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/profile.php?id=61575698363382",
                      "_blank"
                    );
                  }}
                />
                <img
                  className="lazyload loaded"
                  alt="Phương thức thanh toán"
                  src="/assets/images/Tiktok.png"
                  style={{
                    boxSizing: "border-box",
                    borderStyle: "none",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    background: "transparent",
                    width: "40px",
                    height: "unset",
                    marginLeft: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.open(
                      "https://www.tiktok.com/@valleybookstore",
                      "_blank"
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
}

body {
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: rgb(33, 37, 41);
  text-align: left;
  background-color: rgb(255, 255, 255);
  margin: 0px;
  overflow: hidden;
  font-family: 'civil-regular', sans-serif;
  padding: 0px;
}
`,
        }}
      />
    </>
  );
}
