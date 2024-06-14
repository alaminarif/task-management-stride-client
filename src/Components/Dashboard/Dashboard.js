import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import useMember from "../hooks/useMember";
import { signOut } from "firebase/auth";
import Loading from "../Shared/Loading/Loading";

const Dashboard = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);

  const member = localStorage.getItem("member");
  const navigate = useNavigate();
  const handleSignOut = () => {
    if (admin) {
      signOut(auth);
      navigate("/home");
    } else {
      localStorage.removeItem("member");
      navigate("/home");
    }
  };
  if (adminLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="drawer drawer-mobile mt-5 ">
        <input id="my-drawer-member" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer-member" className="btn ml-5 bg-teal-500 drawer-button sm:mb-5 text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-member" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-white lg:bg-teal-500 text-base-content rounded ">
            {member && (
              <li>
                <Link className="hover:bg-teal-300 lg:text-white uppercase " to="/dashboard">
                  My Profile
                </Link>
              </li>
            )}

            {member && (
              <>
                <li>
                  <Link className="hover:bg-teal-300 lg:text-white uppercase" to="assignedTasks">
                    My Tasks
                  </Link>
                </li>
                <li>
                  <Link className="hover:bg-teal-300 lg:text-white uppercase" to="completedTask">
                    Completed Tasks
                  </Link>
                </li>
                <li>
                  <Link className="hover:bg-teal-300 lg:text-white uppercase" to="uncompletedTask">
                    Uncompleted Tasks
                  </Link>
                </li>
                {/* <li>
                  <Link to="taskForwarding">Task Forwarding</Link>
                </li> */}

                <li>
                  <button className="hover:bg-teal-300 lg:text-white uppercase" onClick={handleSignOut}>
                    Log Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div >
      </div >
    </>
  );
};

export default Dashboard;
