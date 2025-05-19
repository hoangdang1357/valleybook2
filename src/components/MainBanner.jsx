import React from "react";
import banner from "/assets/images/banner-image.jpg";
import { useNavigate } from "react-router-dom";

function MainBanner() {
  const navigate = useNavigate();

  return (
    <div className="main-banner py-5" style={{ backgroundColor: "#fff9f2" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="caption header-text">
              <h6 style={{ color: "#ff6b6b", fontWeight: "bold" }}>
                <br />
                <br />
                <br />
                <br />
              </h6>
              <h2 style={{ fontWeight: "700", fontSize: "2rem" }}>
                Valley Book <br />
                thung lũng của tri thức
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  marginTop: "15px",
                  textAlign: "center",
                }}
              >
                Khám phá kho tàng sách đa dạng từ khắp nơi trên thế giới – sách
                in, sách điện tử và cả sách nói.
              </p>

              <div
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  padding: "10px 24px",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              ></div>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div
              className="right-image position-relative"
              style={{ textAlign: "center" }}
            >
              <img
                src={banner}
                alt="Banner"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  transform: "scale(1.2)", // hoặc dùng transform để phóng to
                  cursor: "pointer",
                }}
                onClick={() => navigate("/specificBook")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;
