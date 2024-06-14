import React, { useState } from "react";
import './Register.css'
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Register.css";
import { Alert, Prompt } from "react-st-modal";
const AdminLogin = () => {
  const [loginError, setLoginError] = useState("");
  const [passwordIcon, setPasswordIcon] = useState(false);
  const toggleButton = () => {
    setPasswordIcon((prevPasswordIcon) => !prevPasswordIcon);
  };
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, admin, adminLoading, error] =
    useSignInWithEmailAndPassword(auth);

  //------- handle reset-email-password start------
  const [sendPasswordResetEmail, sending, sendingError] =
    useSendPasswordResetEmail(auth);

  //-------handle reset-email-password-end------

  const handleLogin = () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return toast.error("please enter a valid email address");
    }
    if (password <= 7) {
      return toast.error("password must be 8 characters or longer");
    }
    signInWithEmailAndPassword(email, password);
  };

  if (adminLoading) {
    return <Loading />;
  }

  if (sendingError) {
    return toast.error(sendingError?.message);
  }
  if (admin) {
    navigate("/innerHome");
    toast.success("Signed In successfully");
  }
  if (error) {

    toast.error(error?.message)
  }

  const handlePasswordReset = async () => {
    const requiredEmail = await Prompt("Input your email", {
      isRequired: true,
      defaultValue: `${email}`,
    });
    if (!/\S+@\S+\.\S+/.test(requiredEmail)) {
      return Alert("Please enter a valid email", "Invalid email");
    } else {
      await sendPasswordResetEmail(requiredEmail);
      toast.success("A password reset email has been sent");
    }
  };

  return (
    <div className="hero min-h-secreen">
      <div className="hero-content flex-col lg:flex-row-reverse w-full rounded-xl p-10">
        <div
          data-aos="zoom-in-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="text-center lg:text-left card flex-shrink-0 w-full max-w-sm shadow-2xl border-y-4 border-teal-600 p-7"
        >
          <h1 className="text-3xl font-bold text-white text-center">
            Admin Login
          </h1>
          <p className="py-6 text-center text-white">
            Hello Admin, Log in now to manage your team works. If you are
            already registered you must have an email and password. Use them for
            login. If you did not register yet,{" "}
            <span>
              <Link to="/register" className="text-teal-300">
                Click here.
              </Link>
            </span>
          </p>
          <hr className="pb-4" />
          <div>
            <p className="text-center p-5 text-white font-bold">
              Are you a member?{" "}
              <span>
                <Link to="/employeeLogin" className="text-teal-300">
                  Login here.
                </Link>
              </span>
              <h2 className="text-white"> Member Login</h2>
            </p>
          </div>
        </div>
        <div 
          data-aos="zoom-in-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-teal-600">
          <div className="card-body">
            <div className="form-control">
              <h1 className="text-3xl font-bold text-center text-neutral">Admin Login</h1>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              required
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email"
                className="input input-bordered shadow w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex flex-between w-full ml-1">
                <input required
                  onChange={(e) => setPassword(e.target.value)}
                  type={passwordIcon ? "text" : "password"}
                  placeholder="password"
                  className="input font-family input-bordered shadow w-full"
                />
                <button className="btn-icon" onClick={toggleButton}>
                  {passwordIcon ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </button>
              </div>
              <label className="label">
                <button
                  className="label-text-alt text-sm text-teal-500 link link-hover p-2"
                  onClick={handlePasswordReset}
                >
                  Reset password
                </button>
              </label>
            </div>
            {loginError && <small className="text-red-500">{loginError}</small>}
            <div className="form-control mt-6">
              <button
                onClick={handleLogin}
                className="btn bg-teal-500 hover:bg-teal-800 border-none modal-button mb-5 text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
