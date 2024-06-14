import React from "react";
import "./Features.css";
import success from "../../Images/success1.png";
import email from "../../Images/email-removebg-preview.png";
import feature from "../../Images/feature1-removebg-preview.png";
import feature2 from "../../Images/feature2-removebg-preview.png";
import feature3 from "../../Images/info1-removebg-preview.png";
import feature4 from "../../Images/feature4-removebg-preview.png";

const Feature = () => {
  return (
    <div className="font-serif mb-6">
      <div className="mb-6 ">
        {" "}
        <h1 className="text-3xl pt-8 font-bold mx-14 lg:text-center text-white font-serif">
          The four main features of TMT
        </h1>
        <p className="py-6 text-lg text-slate-300 font-serif lg:w-2/4 mx-4 lg:text-center lg:mx-auto ">
          TMT Software is a mission-critical tool to plan, assign, release, and
          report on work. With TMT Software, you can rest easy knowing that you
          have the right foundation on which to grow
        </p>
      </div>
      <div className="features">
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card lg:mr-8 flex lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure>
              <img src={feature2} alt="Movie" className="rounded lg:w-96 lg:h-40 w-40 h-40 "/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Manage team members</h2>
              <p className="text-slate-500 font-serif">
                An admin can manage his team members. He can provide review, add
                and remove members.
              </p>
            </div>
          </div>
        </div>
        <div  data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000">
        <div className="card lg:ml-8 flex lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure>
              <img src={feature4} alt="Movie" className="rounded lg:w-96 lg:h-40 w-40 h-40 p-2"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Email system</h2>
              <p className="text-slate-500  font-serif ">
                When admin add a member in a team, the member will get a
                mail. In this mail, member can see his member id and password.
              </p>
            </div>
          </div>
          </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card lg:mr-8 flex lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure>
              <img src={feature} alt="Movie" className="rounded lg:w-96 lg:h-40 w-40 h-40 p-2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Assign tasks to members</h2>
              <p className="text-slate-500 font-serif">
                An admin can assign tasks to the team members and he can check
                the members's task information.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="2000"
        >
          <div className="card lg:ml-8 flex lg:flex-row flex-col items-center bg-white w-96 max-h-80 mx-auto shadow-xl">
            <figure>
              <img src={feature3} alt="Movie" className="rounded lg:w-96 lg:h-40 w-40 h-40 p-2" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Member task information</h2>
              <p className="text-slate-500 font-serif">
                A member can see his completed, uncompleted task and he can
                update the pending tasks.
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
};

export default Feature;
