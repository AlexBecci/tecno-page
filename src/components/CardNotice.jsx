import React from "react";
import { TfiTimer } from "react-icons/tfi";
import img from "../assets/img/gta-6.jpg";

function CardNotice() {
  return (
    <div className="h-full border-2 border-gray-00 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={img}
        alt="blog"
      />
      <div className="p-4">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
          GTA 6: fecha de lanzamiento y todo lo que sabemos hasta ahora
        </h1>
        <p className="leading-relaxed mb-2">
          El universo gamer está en ascuas. ¿Por qué? Porque Rockstar Games
          anda…
        </p>
        <div className="flex items-center flex-wrap ">
          <div className=" flex">
            <div className="h-8 w-8 mb-4 lg:mb-0 mr-4">
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_0.png"
                alt
                className="h-full w-full rounded-full overflow-hidden shadow"
              />
            </div>
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Becci Alex
            </a>
            <span className="border-l-2 border-gray-200 mx-2"></span>
            <span className="text-gray-400 mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-2 leading-none text-sm pr-2 py-1 ">
              <TfiTimer className="h-4 w-4 text-black" />
              10 Min de Lectura
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNotice;
