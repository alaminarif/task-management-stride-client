import React from "react";
import task from "../../Images/task1.png";
const Help = () => {
  return (
    <div className="home-banner-parent">
      <div
        data-aos="zoom-in-right"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <img src={task} className="  h-5/6 rounded-lg " alt="" />
      </div>
      <div
        data-aos="zoom-in-left"
        data-aos-easing="linear"
        data-aos-duration="3000"
      >
        <h1 className="text-3xl mx-12 mt-8 lg:mx-0 pt-8 font-bold text-white font-serif">
          TMT helps to manage team projects
        </h1>
        <p className="py-6 text-xl text-slate-300 font-serif ">
          By using TMT you can collaborate, manage projects, organize tasks, and
          build team spirit-all in one place. The way your team works is
          unique-accomplish it with TMT.
        </p>
      </div>
    </div>
  );
};

export default Help;
