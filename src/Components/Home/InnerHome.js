import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";

import "./InnerHome.css";
import Loading from "../Shared/Loading/Loading";

const InnerHome = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const [teams, setTeams] = useState([]);
  const email = admin?.email;

  useEffect(() => {
    fetch(`https://tm-tool.onrender.com/teams/${email}`)
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, [email, teams]);

  if (adminLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="drawer drawer-mobile mt-5">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label for="my-drawer" className="btn ml-5 bg-teal-500 drawer-button sm:mb-5 text-white lg:hidden">
            My Teams
          </label>
          <div className="pb-10">

            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48  bg-teal-500 text-base-content rounded">
            {admin?.uid && (
              <>
                {teams.length !== 0 ? (
                  <>
                    {teams.map((team) => (
                      <li className="  " key={team?._id}>
                        <Link className="font-bold uppercase hover:bg-teal-300 hover:text-white" style={{ color: `${team?.teamColor}` }} to={team?.teamName}>
                          {team?.teamName}
                        </Link>
                      </li>
                    ))}
                  </>
                ) : (
                  <p className="text-center">You have not added a team</p>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InnerHome;
