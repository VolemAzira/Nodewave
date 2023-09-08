import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Product from "./pages/Product";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
};

export default App;
