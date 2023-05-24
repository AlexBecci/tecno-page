import React from "react";
import CardNotice from "./CardNotice";

function Notices() {
  return (
    <>
    <div className="px-8 text-center py-0 lg:py-8 font-medium text-2xl">
    Últimas noticias en Consolas y videojuegos
    </div>
    <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full px-4">
      <div className="w-full sm:w-1/3 h-full rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white my-8 ">
        <CardNotice/>
      </div>
      <div className="w-full sm:w-1/3 h-full shadow bg-white my-8 ">
        <CardNotice/>
      </div>
      <div className="w-full sm:w-1/3 h-full rounded-b sm:rounded-b-none shadow bg-white my-8 ">
        <CardNotice/>
      </div>
    </div>
    </>
  );
}

export default Notices;
