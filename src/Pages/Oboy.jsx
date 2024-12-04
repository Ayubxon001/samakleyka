import React from "react";
import oboy1 from "../images/oboy/oboy1.jpg";
import oboy2 from "../images/oboy/oboy2.jpg";
import oboy3 from "../images/oboy/oboy3.jpg";
import oboy4 from "../images/oboy/oboy4.jpg";
import oboy5 from "../images/oboy/oboy5.jpg";
import oboy6 from "../images/oboy/oboy6.jpg";
import oboy7 from "../images/oboy/oboy7.jpg";
import oboy8 from "../images/oboy/oboy8.jpg";

const oboys = [
  { src: oboy1, title: "Oboy", price: "249.99 сум" },
  { src: oboy2, title: "Oboy", price: "249.99 сум" },
  { src: oboy3, title: "Oboy", price: "249.99 сум" },
  { src: oboy4, title: "Oboy", price: "249.99 сум" },
  { src: oboy5, title: "Oboy", price: "249.99 сум" },
  { src: oboy6, title: "Oboy", price: "249.99 сум" },
  { src: oboy7, title: "Oboy", price: "249.99 сум" },
  { src: oboy8, title: "Oboy", price: "249.99 сум" },
];

const Oboy = () => {
  const handleBuy = () => {
    alert("скните фото заказа ");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8" id="glatki">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Галерея обоев</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {oboys.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-4 mx-auto"
            />
            <h2 className="text-xl font-semibold text-gray-900 text-center">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 mb-4 text-center">
              {item.price}
            </p>
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

export default Oboy;
