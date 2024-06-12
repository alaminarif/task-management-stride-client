import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Auth/GoogleLogin";
import signUpImage from "../assets/Signup.png";
import { useEffect } from "react";

export default function Register() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmailAndPassword(email, password).then((data) => {
      if (data?.user?.email) {
        const userInfo = {
          email: data?.user?.email,
          name: name,
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

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);
  return (
    <div className="hero min-h-screen bg-secondary">
      <div className="hero-content grid grid-cols-2 w-full mx-auto">
        <div className="text-center lg:text-left">
          <img src={signUpImage} alt="" className="" />
        </div>
        <div className=" card shadow-2xl bg-base-100 max-w-lg">
          <form onSubmit={handleSubmit} className="card-body  ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name" placeholder="name" className="input input-bordered" name="name" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Register</button>
              <p className="text-center">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-orange-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
          <div className=" w-full ">
            <div className="flex flex-col gap-2 mx-7 mb-7">
              <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
