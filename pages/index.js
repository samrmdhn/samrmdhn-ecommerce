import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import Collaborations from "../components/Collaborations";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductFavorite from "../components/ProductFavorite";
import ProductHot from "../components/ProductHot";
import ProductReviews from "../components/ProductReviews";
import Subscribe from "../components/Subscribe";
import Marquee from "react-fast-marquee";
import Navbar from "../components/Navbar";
export default function Home() {
  const [cartFromStorage, setCarFromStorage] = useState();
  useEffect(() => {
    const cartToStorage = JSON.parse(
      window.localStorage.getItem("my-cart") || "[]"
    );
    setCarFromStorage(cartToStorage);
  }, [cartFromStorage]);

  return (
    <div className="" style={{ fontFamily: "Helvetica" }}>
      <Navbar cartCount={cartFromStorage} />
      <Hero />
      <Marquee
        speed={60}
        gradient={false}
        style={{ backgroundColor: "#262626" }}
      >
        <div className="text-primaryy-2">SUMMER DISC 2022 NOW</div>
      </Marquee>
      <ProductHot />
      <ProductFavorite />
      <ProductReviews />
      <Collaborations />
      <Subscribe />
      <Footer />
    </div>
  );
}
