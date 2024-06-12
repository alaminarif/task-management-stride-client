import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";

import logo from "../../assets/computer.png";
import ProfileLogin from "../../assets/profile-login.png";

export default function Navbar() {
  const [user] = useAuthState(auth);

  const [signOut] = useSignOut(auth);
  console.log(user);

  const handleLogout = async () => {
    await signOut();
    localStorage.removeItem("token");
  };
  return (
    <div className="navbar bg-accent sticky top-0 px-16 z-10">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold">
            <li className=" hover:bg-primary hover:rounded-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-primary hover:rounded-lg">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:bg-primary hover:rounded-lg">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:bg-primary hover:rounded-lg">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-primary hover:rounded-lg">
              <Link to="/contact">About</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="flex items-center px-1 uppercase font-bold">
          <li className="hover:bg-primary hover:rounded-lg px-2 py-4">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-primary hover:rounded-lg px-2 py-4">
            <Link to="/products">Products</Link>
          </li>
          <li className="hover:bg-primary hover:rounded-lg px-2 py-4">
            <Link to="/blog">Blog</Link>
          </li>

          <li className="hover:bg-primary hover:rounded-lg px-2 py-4">
            <Link to=""></Link>
          </li>
          <li className="hover:bg-primary hover:rounded-lg px-2 py-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="hover:bg-primary hover:rounded-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn btn-primary">
            Login
          </Link>
          <Link to={"/register"} className="btn btn-primary">
            Registration
          </Link>
        </div>
      ) : (
        <>
          {/* <div className="dropdown">
            <div tabIndex={0} className="text-black">
              Click
            </div> */}

          <div className="navbar-end flex gap-4">
            <div className=" dropdown dropdown-end ">
              <div className=" text-neutral-content rounded-full w-8" tabIndex={0}>
                <img src={user.photoURL ? user.photoURL : ProfileLogin} className="w-12 rounded-full" alt="" />
                {/* <span>{user?.displayName ? user.displayName.slice(0, 2) : "a"}</span> */}
              </div>

              <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow text-primary bg-secondary">
                <div className="card-body ">
                  <span className="text-black mx-auto">accounts</span>
                  <hr />
                  <div>
                    <Link to={"/dashboard/home"} className=" text-black">
                      Dashboard Home
                    </Link>
                  </div>
                  <div>
                    <button className="text-black " onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
