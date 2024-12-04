import React from "react";
import samakleyka1 from "../images/samakleyka/samakleyka1.jpg";
import samakleyka2 from "../images/samakleyka/samakleyka2.jpg";
import samakleyka3 from "../images/samakleyka/samakleyka3.jpg";
import samakleyka4 from "../images/samakleyka/samakleyka4.jpg";
import samakleyka5 from "../images/samakleyka/samakleyka5.jpg";
import samakleyka6 from "../images/samakleyka/samakleyka6.jpg";
import samakleyka7 from "../images/samakleyka/samakleyka7.jpg";
import samakleyka8 from "../images/samakleyka/samakleyka8.jpg";
import samakleyka9 from "../images/samakleyka/samakleyka9.jpg";
import samakleyka10 from "../images/samakleyka/samakleyka10.jpg";
import samakleyka11 from "../images/samakleyka/samakleyka11.jpg";
import samakleyka12 from "../images/samakleyka/samakleyka12.jpg";
import samakleyka13 from "../images/samakleyka/samakleyka13.jpg";
import samakleyka14 from "../images/samakleyka/samakleyka14.jpg";
import samakleyka15 from "../images/samakleyka/samakleyka15.jpg";
import samakleyka16 from "../images/samakleyka/samakleyka16.jpg";
import samakleyka17 from "../images/samakleyka/samakleyka17.jpg";
import samakleyka18 from "../images/samakleyka/samakleyka18.jpg";
import samakleyka19 from "../images/samakleyka/samakleyka19.jpg";
import samakleyka20 from "../images/samakleyka/samakleyka20.jpg";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const images = [
  { src: samakleyka1, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka2, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka3, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka4, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka5, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka6, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka7, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka8, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka9, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka10, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka11, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka12, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka13, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka14, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka15, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka16, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka17, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka18, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka19, title: "Glatki ", price: "20.99 сум" },
  { src: samakleyka20, title: "Glatki", price: "20.99 сум" },
];

const GlatkiAll = () => {
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
              <p className="text-lg text-gray-700 mb-4">{item.price}</p>
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300"
                onClick={() => handleBuy(item.title, item.price)}
              >
                Sotib olish
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlatkiAll;
