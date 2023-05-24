import React from "react";


function Header() {
  return (
    <section className="text-zinc-900 body-font">
    <div className="container  px-5 py-16 mx-auto items-center">
      <div className="md:w-1/2 md:pr-12 md:py-8  md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
        <h1 className="sm:text-4xl text-2xl font-semibold title-font mb-2 text-gray-900">Consolas y videojuegos</h1>
        <p className="leading-relaxed text-base py-4 font-medium ">En esta sección encontrarás todas las noticias relacionadas con las consolas y el mundo de los videojuegos. Playstation, XBox, Nintendo y PC. También recomendaremos los mejores accesorios para consolas, ofertas y mucho más.
</p>
      </div>
    </div>
  </section>
  );
}

export default Header;
