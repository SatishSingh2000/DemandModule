import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Foote";
import Menu from "./component/frontend/Screens/Menu";
import { useState } from "react";

function App() {
  return (
    <>
      <Navbar />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
