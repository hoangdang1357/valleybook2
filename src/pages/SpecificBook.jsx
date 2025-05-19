import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GridBook from "../components/GridBook";
import { getSpecificBooks } from "../backend/getBookData";
import { BookContext } from "../backend/BookContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function SpecificBook() {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpecificBooks = async () => {
      try {
        const books = await getSpecificBooks([79, 80, 81, 82]);
        setBookList(books);
      } catch (error) {
        console.error("Error fetching specific books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecificBooks();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Sách mới nổi bật</h3>
            </div>
          </div>
        </div>
      </div>
      <BookContext.Provider value={{ bookList, currentPage: 1 }}>
        <div className="specific-book-container">
          <h2>Special Book Collection</h2>
          <GridBook />
        </div>
      </BookContext.Provider>
      <Footer></Footer>
    </div>
  );
}
