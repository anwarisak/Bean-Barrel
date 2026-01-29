import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card />
      <Menu />
    </>
  );
}

export default App;
