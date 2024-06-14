import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import About from "./About";
import ContactUs from "./ContactUs";
import FAQ from "./FAQ";
import Feature from "./Feature";
import GetInTouch from "./GetInTouch";
import Help from "./Help";
import HomeBanner from "./HomeBanner";
import Success from "./Success";

const Home = () => {
  return (
    <div className="">
      <HomeBanner />
      <Help/>
      <Feature/>
      <Success/>
      <AboutUs/>
      <ContactUs/>
      {/* <About /> */}
      {/* <FAQ /> */}
    </div>
  );
};

export default Home;
