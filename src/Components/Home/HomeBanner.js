import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import "./HomeBanner.css";
// import Banner from "../../Images/task-tool.png";
import login2 from "../../Images/banner.png";
import Loading from "../Shared/Loading/Loading";
import { toast } from "react-toastify";

const HomeBanner = () => {
  const navigate = useNavigate();
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const [signInWithGoogle, googleAdmin, googleAdminLoading, googleAdminError] =
    useSignInWithGoogle(auth);
  const member = localStorage.getItem("member");

  if (adminLoading || googleAdminLoading) {
    return <Loading />;
  }
  if (adminError) {
    return toast.error(adminError.message);
  }
  if (googleAdminError) {
    return toast.error(googleAdminError.message);
  }

  if (admin || googleAdmin) {
    // toast.success("Successfully Signed In")
    return navigate("/innerHome");
  }
  if (member) {
    // toast.success("Successfully Signed In")
    return navigate("/dashboard");
  }
  return (
    <div className="home-banner-parent">
      <div
        className="banner-left-side"
        data-aos="fade-down-right"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-white font-serif">
          The one place for all your projects and team collaboration
        </h2>
        <ul className="mt-10">
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(60,189,171)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3 text-slate-300 font-serif">
              All the tools your team needs put under one roof
            
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(60,189,171)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3 text-slate-300 font-serif">
                Ultimate control over teams and projects easier than ever
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(60,189,171)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3 text-slate-300 font-serif">
              
                project delivery & on point team accountability
           
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(60,189,171)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3 text-slate-300 font-serif">
        
                Easy-to-understand with little to no learning curve
            </p>
          </li>
          <li className="mt-3 list-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(60,189,171)"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>{" "}
            <p className="ml-3 text-slate-300 font-serif">
                Free and always will be
            </p>
          </li>
        </ul>
      </div>
      <div
        className="banner-right-side"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {!admin?.uid && !member && (
          <div className="w-full">
            <div>
              <div className="banner-image">
                <img
                  className="ml-10"
                  style={{ width: "80%" }}
                  src={login2}
                  alt=""
                />
              </div>
            </div>
            <div className="w-3/6 mx-auto">
              <button
                onClick={() => navigate("/register")}
                className=" btn bg-teal-500 hover:bg-teal-800 w-full  text-white "
              >
                Register with email
              </button>
            </div>
            <div>
              <p className="text-center text-white mr-2">or</p>
            </div>
            <div className="w-3/6 mx-auto">
              <button
                onClick={() => signInWithGoogle()}
                className=" btn hover:bg-teal-500 text-white w-full  btn-outline"
              >
                Continue with google
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeBanner;
