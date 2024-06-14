import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import useTeams from "../../hooks/useTeams";
import "./MyTeams.css";
import { useNavigate } from "react-router-dom";
import MyTeamsModal from "./MyTeamsModal";

const MyTeams = () => {
  const navigate = useNavigate();
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const email = admin?.email;
  const { teams } = useTeams(admin);
  return (
    <div className="mx-5">
      <h1 className="text-center text-4xl">My Teams</h1>
      <div className="mt-button-wrapper">
        <div>
          <label for="my-modal" className="btn btn-primary modal-button mb-5">
            Create a team
          </label>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
              <th>Project</th>
              <th>Switch</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team._id}>
                <th>{team?.teamName}</th>
                <td>{team?.members}</td>
                <td>{team?.project}</td>
                <td>
                  <button onClick={() => navigate(`/myTeams/${team.teamName}`)} className="btn btn-primary text-white">
                    View Team Details
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary text-white">Archive</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal for creating a team */}

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <MyTeamsModal></MyTeamsModal>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
