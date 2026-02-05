import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import StoreNavbar from "./components/StoreNavbar";

function Store() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((res) => setBooks(res.data))
      .catch(() =>
        // fallback demo data
        setBooks([
          {
            _id: "1",
            title: "Physics Class 12 Complete Notes",
            price: 299,
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
          {
            _id: "2",
            title: "Chemistry Organic Reactions",
            price: 249,
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
          {
            _id: "3",
            title: "Maths Formula Handbook",
            price: 199,
            pdfUrl:
              "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
          },
        ])
      );
  }, []);

  // 💳 DEMO PAYMENT + PDF DOWNLOAD
  const buyBook = (book) => {
    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Razorpay TEST key
      amount: book.price * 100,
      currency: "INR",
      name: "PW PDF Store",
      description: book.title,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5a/Physics_Wallah_logo.png",

      handler: function () {
        alert("Payment Successful 🎉");

        // ⬇️ Download PDF
        const link = document.createElement("a");
        link.href = book.pdfUrl;
        link.download = `${book.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      },

      prefill: {
        name: "Demo User",
        email: "demo@gmail.com",
        contact: "9999999999",
      },

      theme: {
        color: "#6366F1",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <>
      <StoreNavbar userName="Appu" />

      {/* BACKGROUND */}
      <div className="relative min-h-screen pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HERO */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Study Materials
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              Handpicked premium notes & exam-ready PDFs by expert educators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* FILTER */}
            <div className="md:col-span-1 sticky top-32 h-fit">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600 to-pink-500 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">Filter PDFs</h3>
                </div>

                <div className="p-6 space-y-6">
                  <input
                    type="text"
                    placeholder="Search notes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-indigo-500"
                  />

                  <div>
                    <label className="font-semibold text-slate-700">
                      Max Price: ₹{maxPrice}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className="w-full accent-indigo-600 mt-2"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BOOKS */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {books
                .filter(
                  (b) =>
                    b.title.toLowerCase().includes(search.toLowerCase()) &&
                    b.price <= maxPrice
                )
                .map((book, index) => (
                  <motion.div
                    key={book._id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden"
                  >
                    <div className="h-44 bg-gradient-to-br from-indigo-200 to-pink-200 flex items-center justify-center text-xl font-bold text-white">
                      PDF NOTES
                    </div>

                    <div className="p-6 flex flex-col">
                      <h3 className="font-bold text-lg mb-2">{book.title}</h3>
                      <p className="text-2xl font-extrabold text-indigo-600 mb-6">
                        ₹{book.price}
                      </p>

                      <button
                        onClick={() => buyBook(book)}
                        className="mt-auto py-3 rounded-xl bg-gradient-to-r
                        from-indigo-600 to-pink-500 text-white font-semibold
                        hover:scale-105 transition shadow-lg"
                      >
                        Buy Now
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
