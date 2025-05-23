import React, { useContext, useEffect } from "react";
import "../../public/assets/css/forumStyle.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ForumContext } from "../backend/ForumContext";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useNavigate } from "react-router-dom";

const AdminPost = () => {
    const { adminPost } = useContext(ForumContext);
    const navigate = useNavigate();
    return (
        <div className="admin-post">
            <p className="forum-title">Thông báo, sự kiện từ Valley Book</p>
            <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={5000}
            >
             {adminPost.map((adPost, index) => (
                    <div key={index}>
                        <div className="forum-post" 
                        onMouseDown={(e) => (e.currentTarget.startX = e.clientX)}
                        onMouseUp={(e) => {
                          const deltaX = Math.abs(e.clientX - e.currentTarget.startX);
                          if (deltaX < 10) {
                            navigate(`/forum/${adPost.id}`);
                          }
                        }}
                        onTouchStart={(e) => {
                          e.currentTarget.startX = e.touches[0].clientX;
                        }}
                        onTouchEnd={(e) => {
                          const deltaX = Math.abs(e.changedTouches[0].clientX - e.currentTarget.startX);
                          if (deltaX < 10) {
                            navigate(`/forum/${adPost.id}`);
                          }
                        }}>
                            <div className="post-content">
                                <p className="post-topic">
                                    {adPost.topic}
                                </p>
                                <p className="post-username">Người đăng: {adPost.username}</p>
                            </div>
                            <div className="post-attribute">
                                <p className="post-date-created">{new Date(adPost.created_at).toLocaleString()}</p>
                                <div className="post-emotion">
                                <span className="post-like">
                                    {(!adPost.like_count || adPost.like_count.length === 0) ? 0 : adPost.like_count.length} 
                                    <ThumbUpAltIcon />
                                </span>
                                <span className="post-dislike">
                                    {(!adPost.dislike_count || adPost.dislike_count.length === 0) ? 0 : adPost.dislike_count.length} 
                                    <ThumbDownAltIcon />
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AdminPost;
