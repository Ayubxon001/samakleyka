import React from "react";
import { Link } from "react-router-dom";
import dekor1 from "../images/dekor/dekor1.JPG";
import dekor2 from "../images/dekor/dekor2.JPG";
import dekor3 from "../images/dekor/dekor5.JPG";
import dekor4 from "../images/dekor/dekor4.JPG";

const Dekor = () => {
  const images = [
    { src: dekor1, title: "Dekor", price: "250,000 сум" },
    { src: dekor2, title: "Dekor", price: "250,000 сум" },
    { src: dekor3, title: "Dekor", price: "250,000 сум" },
    { src: dekor4, title: "Dekor", price: "250,000 сум" },
  ];

  const handleBuy = () => {
    alert("скните фото заказа ");
  };

  return (
    <div className="p-8 bg-gray-50" id="dekor">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Yangiliklar</h1>
        <Link
          to="/all-dekor"
          className="text-blue-600 hover:text-blue-800 hover:underline flex items-center space-x-1 transition"
        >
          <span>Xammasini korish</span>
          <span>➔</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              className="w-52 h-40 object-cover rounded-lg mb-4 mx-auto"
              src={item.src}
              alt={item.title}
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4">{item.price}</p>
            <a href="https://t.me/Rustamof_00">
              <button
                className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                onClick={() => handleBuy()}
              >
                Sotib olish
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dekor;
