import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\images\products-kite.png"
        ProductName="Kite"
        ProductDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
     <RightSection 
        imageURL="media\images\products-console.png"
        ProductName="Console"
        ProductDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        LearnMore="" />
      <LeftSection
        imageURL="media\images\products-coin.png"
        ProductName="Coin"
        ProductDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection 
        imageURL="media\images\products-kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        LearnMore="" />
      <LeftSection
        imageURL="media\images\varsity-products.png"
        ProductName="Varsity mobile"
        ProductDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        LearnMore=""
        googlePlay=""
        appStore=""
      />
     
      <Universe />
    </>
  );
};

export default ProductPage;
