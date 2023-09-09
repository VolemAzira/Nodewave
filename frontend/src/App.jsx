import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Product from "./pages/Product";
import Work from "./pages/Work";
import How from "./pages/How";
import Made from "./pages/Made";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Product />
      <Work />
      <How />
      <Made />
      <Footer />
    </div>
  );
};

export default App;
