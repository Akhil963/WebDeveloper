import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "./Store.css";

function Store() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  const buyBook = async (book) => {
    try {
      
      const orderRes = await axios.post(
        "http://localhost:3001/create-order",
        { amount: book.price }
      );

      
      const options = {
        key: "YOUR_KEY_ID",
        amount: orderRes.data.amount,
        currency: "INR",
        name: "PW PDF Store",
        description: book.title,
        order_id: orderRes.data.id,

       
        handler: async function (response) {
          const verifyRes = await axios.post(
            "http://localhost:3001/verify-payment",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              bookId: book._id,
            }
          );

          if (verifyRes.data.success) {
          
            window.location.href = verifyRes.data.downloadUrl;
          } else {
            alert("Payment verification failed");
          }
        },
      };

      
      new window.Razorpay(options).open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3 className="mb-4 fw-bold">📚 Available PDFs</h3>

        <div className="row">
        
          <div className="col-md-3">
            <div className="filter-card">
              <input
                className="form-control mb-3"
                placeholder="Search PDFs"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <label>Max Price: ₹{maxPrice}</label>
              <input
                type="range"
                min="0"
                max="1000"
                className="form-range"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

         
          <div className="col-md-9">
            <div className="row">
              {books
                .filter(
                  (b) =>
                    b.title.toLowerCase().includes(search.toLowerCase()) &&
                    b.price <= maxPrice
                )
                .map((book) => (
                  <div key={book._id} className="col-md-4 mb-4">
                    <div className="book-card h-100">
                      <img
                        src={
                          book.image ||
                          "https://via.placeholder.com/300x200?text=PW+PDF"
                        }
                        className="book-img"
                        alt={book.title}
                      />

                      <span className="badge badge-pw">PDF Notes</span>
                      <h5 className="book-title mt-2">{book.title}</h5>
                      <p className="book-price">₹{book.price}</p>

                      <button
                        className="btn btn-pw mt-auto"
                        onClick={() => buyBook(book)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {books.length === 0 && (
              <p className="text-center text-muted mt-5">
                No books available
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
