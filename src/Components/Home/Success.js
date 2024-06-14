import React from "react";
import success from "../../Images/success1.png";
const Success = () => {
  return (
    <div className="home-banner-parent">
      <div
        className=""
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <h1 className="text-3xl pt-8 mx-12 lg:mx-0 font-bold text-white font-serif">
          TMT features assist to gain <br /> your team success.
        </h1>
        <p className="py-6 text-xl text-slate-300 font-serif ">
          Powering a productive team means using a powerful tool. From project
          plan to goal setting, The effective features of TMT give any team the
          ability to quickly set up and customize workflows for just about
          anything.
        </p>
      </div>
      <div
        className=""
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <img src={success} className=" lg:ml-24 h-3/4 rounded-lg " alt="" />
      </div>
    </div>
  );
};

export default Success;
