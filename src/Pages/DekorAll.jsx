import React from "react";
import dekor7 from "../images/dekor/dekor7.PNG";
import dekor8 from "../images/dekor/dekor8.PNG";
import dekor9 from "../images/dekor/dekor9.PNG";
import dekor10 from "../images/dekor/dekor10.PNG";
import dekor11 from "../images/dekor/dekor11.JPG";
import dekor12 from "../images/dekor/dekor12.JPG";
import dekor13 from "../images/dekor/dekor13.PNG";
import dekor14 from "../images/dekor/dekor14.PNG";
import dekor15 from "../images/dekor/dekor15.PNG";
import dekor16 from "../images/dekor/dekor16.PNG";
import dekor17 from "../images/dekor/dekor17.PNG";
import dekor19 from "../images/dekor/dekor19.PNG";
import dekor20 from "../images/dekor/dekor20.PNG";
import dekor21 from "../images/dekor/dekor21.JPG";
import dekor22 from "../images/dekor/dekor22.JPG";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const images = [
  { src: dekor7, title: "Dekor", price: "250,000 сум" },
  { src: dekor8, title: "Dekor", price: "250,000 сум" },
  { src: dekor9, title: "Dekor", price: "250,000 сум" },
  { src: dekor10, title: "Dekor", price: "250,000 сум" },
  { src: dekor11, title: "Dekor", price: "250,000 сум" },
  { src: dekor12, title: "Dekor", price: "250,000 сум" },
  { src: dekor13, title: "Dekor", price: "250,000 сум" },
  { src: dekor14, title: "Dekor", price: "250,000 сум" },
  { src: dekor15, title: "Dekor", price: "250,000 сум" },
  { src: dekor16, title: "Dekor", price: "250,000 сум" },
  { src: dekor17, title: "Dekor", price: "250,000 сум" },
  { src: dekor19, title: "Dekor", price: "250,000 сум" },
  { src: dekor20, title: "Dekor", price: "250,000 сум" },
  { src: dekor22, title: "Dekor", price: "250,000 сум" },
  { src: dekor21, title: "Dekor", price: "250,000 сум" },
];

const DekorAll = () => {
  const handleBuy = (title, price) => {
    alert(`Вы купили ${title} за ${price}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-6">
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-lg transition transform hover:scale-105">
            ← Orqaga
          </Button>
        </Link>
        <h1 className="text-2xl sm:text-xl sm:ml-2 font-extrabold text-gray-800">
          Xamma Rasimla
        </h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-100"
          >
            <div className="flex items-center justify-center h-48">
              <img
                src={item.src}
                alt={item.title}
                className=" max-w-full max-h-full transition-transform duration-300 hover:scale-75"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {item.price} <span></span>{" "}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default DekorAll;
