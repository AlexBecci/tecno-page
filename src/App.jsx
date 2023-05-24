import { useState } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Notices from "./components/Notices";

function App() {
  return (
    <body>
      <Nav/>
      <Header/>
      <Notices/>
    </body>
  );
}

export default App;
