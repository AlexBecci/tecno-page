import { useState } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Notices from "./components/Notices";
import Footer from "./components/Footer";

function App() {
  return (
    <body>
      <Nav/>
      <Header/>
      <Notices/>
      <Footer/>
    </body>
  );
}

export default App;
