import React from "react";
import alamin from "../../Images/Md Al Amin Hossain.PNG";
import faridul from "../../Images/faridul.jpg";
import shuvo from "../../Images/shuvo.jpg";
import arifulislam from "../../Images/arifulislam.jpg";
import alaminarif from "../../Images/alaminarif.jpg";
import nabin from "../../Images/nabin.jpg";
import "./AboutUs.css";
function AboutUs() {
  return (
  
    <div className="font-serif mb-40">
      <div className="mb-6 ">
        {" "}
        <h1 className="text-3xl pt-8 font-bold mx-14 lg:text-center text-white font-serif">
          About our TMT team
        </h1>
        <p className="py-6 text-lg text-slate-300 font-serif lg:w-2/4 mx-4 lg:text-center lg:mx-auto ">
         There are six members of TMT team. 
         Every member is responsible for managing the software that is used to build the project. Everyone is capable of building the software.
        </p>
      </div>
      <div className="about">
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card  flex lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure className="w-3/4">
              <img src={alamin} alt="Movie" className="rounded-full w-28 h-28 p-2"/>
            </figure>
            <div className="card-body">
              <h2 className="text-lg font-bold">Md Al Amin Hossain</h2>
              <h3 className="text-sm font-bold">Full-stack web developer</h3>
              <p className="text-slate-700 font-serif">
              hossainalamin1246@gmail.com
              </p>
              <p className="text-slate-700 font-serif font-family">
              Phone: 01627948044
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card  lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure className="w-3/4">
              <img src={faridul} alt="Movie" className="rounded-full w-28 h-28 p-2"/>
            </figure>
            <div className="card-body">
            <h2 className="text-lg font-bold">Md Faridul Haque</h2>
              <h3 className="text-sm font-bold">MERN-stack web developer</h3>
              <p className="text-slate-700 text-sm font-serif">
              faridulhaquemurshed@gmail.com
              </p>
              <p className="text-slate-700 font-serif font-family">
              Phone: 01996438234
              </p>
              
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card  lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure className="w-3/4">
              <img src={shuvo} alt="Movie" className="rounded-full w-28 h-28 p-2"/>
            </figure>
            <div className="card-body">
            <h2 className="text-lg font-bold">Md Ariful Islam</h2>
              <h3 className="text-sm font-bold">Junior web developer</h3>
              <p className="text-slate-700 font-serif">
              arifulislams063@gmail.com
              </p>
              <p className="text-slate-700 font-serif font-family">
              Phone: 01838404512
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure className="w-3/4">
              <img src={arifulislam} alt="Movie" className="rounded-full w-28 h-28 p-2"/>
            </figure>
            <div className="card-body">
            <h2 className="text-lg font-bold">Md Ariful Islam</h2>
              <h3 className="text-sm font-bold">MERN web developer</h3>
              <p className="text-slate-700 font-serif">
              arifulislam64743@gmail.com
              </p>
              <p className="text-slate-700 font-serif font-family">
              Phone: 01820082894
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure className="w-3/4">
              <img src={alaminarif} alt="Movie" className="rounded-full w-28 h-28 p-2"/>
            </figure>
            <div className="card-body">
            <h2 className="text-lg font-bold">Md Arifur Rahman</h2>
              <h3 className="text-sm font-bold">MERN web developer</h3>
              <p className="text-slate-700 text-xl font-serif">
              arifurr231@gmail.com
              </p>
              <p className="text-slate-600 font-serif font-family">
              Phone: 01793911158
              </p>
            </div>
          </div>
        </div>
       
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card  lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure>
              <img src={nabin} alt="Movie" className="rounded-full w-28 h-28 p-2"/>
            </figure>
            <div className="card-body">
            <h2 className="text-xl font-bold">Mohammad Jewel</h2>
              <h3 className="text-sm font-bold">Frontend web developer</h3>
              <p className="text-slate-600 text-xl font-serif">
              jewelnabin@gmail.com
              </p>
              <p className="text-slate-700 font-serif font-family">
              Phone: 01608250777
              </p>
            </div>
          </div>
        </div>
        
       
        {/* <div>
          <div className="card w-3/5 lg:ml-auto  card-side bg-base-100 shadow-xl">
            <figure>
              <img src={success} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div>
          <div className="card w-3/5  card-side bg-base-100 shadow-xl">
            <figure>
              <img src={success} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default AboutUs;