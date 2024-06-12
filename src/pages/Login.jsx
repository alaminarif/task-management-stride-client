import { Link, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import GoogleLogin from "../components/Auth/GoogleLogin";
import { auth } from "../firebase/firebase.config";
import loginImage from "../assets/login-bro.png";

export default function Login() {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(email, password).then((data) => {
      console.log(data?.user?.email);
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: data?.user?.displayName,
        };
        fetch("https://task-management-stride-server.onrender.com/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  const handleForgetPassword = () => {
    console.log("reset pass");
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="hero-content grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <img src={loginImage} alt="" className=" " />
        </div>
        <div className="flex justify-end">
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>

              <p className="text-center">
                Don&apos;t have any account ?{" "}
                <Link to={"/register"} className="text-orange-500">
                  Register
                </Link>
              </p>
            </form>
            <div className="  w-full ">
              <div className="flex flex-col gap-2 mx-7 mb-7">
                <GoogleLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
