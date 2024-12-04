import React from "react";
import { DiBlackberry } from "react-icons/di";
import { SiNetdata } from "react-icons/si";
import { FaHammer, FaVolumeMute } from "react-icons/fa";

const OurAdvantages = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Наши Преимущества
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <DiBlackberry className="text-6xl text-blue-600 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-green-500 mb-2">
            Теплоизоляция
          </h2>
          <p className="text-gray-600">
            Пенополизтилен отлично держит тепло в помещении.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <SiNetdata className="text-6xl text-green-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-green-500 mb-2">
            Водостойкость
          </h2>
          <p className="text-gray-600">
            Обои, которые не боятся грязи, ведь теперь их можно мыть!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <FaHammer className="text-6xl text-yellow-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-green-500 mb-2">Установка</h2>
          <p className="text-gray-600">
            Вырезать любую форму, снять защитную пленку, прижать к стене — и
            готово!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
          <FaVolumeMute className="text-6xl text-red-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-green-500 mb-2">
            Шумоизоляция
          </h2>
          <p className="text-gray-600">Шумные соседи больше не потревожат.</p>
        </div>
      </div>
    </div>
  );
};

export default OurAdvantages;
