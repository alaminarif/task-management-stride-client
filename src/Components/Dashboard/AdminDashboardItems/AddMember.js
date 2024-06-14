import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../../Firebase/firebase.init";
import { useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import "./AddMember.css";
import useTeamName from "../../hooks/useTeamName";
import '../../Entry/Register.css'
const AddMember = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const { teamName } = useTeamName();
  const [generatedID, setGeneratedID] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = admin?.email;
    const name = e.target.name.value;

    const memberEmail = e.target.email.value;
    const id = e.target.id.value;
    const password = e.target.password.value;

    const data = {
      adminEmail,
      teamName,
      name,

      memberEmail,
      id,
      password,
    };
    if (data) {
      fetch("https://tm-tool.onrender.com/add-new-member", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {

            toast.success("Member has been added successfully!");
          } else {
            toast.error(`${data.message}`);
          }
        });
        e.target.reset();
    }

    if (adminLoading) {
      return <Loading />;
    }
  };

  // handle id check al alamin arif start
  const handleIdCheck = (randomId) => {
    fetch(`https://tm-tool.onrender.com/random-id-check/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          return handleIdCheck(randomId);
        } else if (data.memberId) {
          setGeneratedID(data.memberId);
        }
      });
  };
  const handleGenerate = () => {
    setGeneratedID('')
    const randomId = Math.floor(10000 + Math.random() * 9000000);
    handleIdCheck(randomId);
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="addMember-form">
      <form onSubmit={handleSubmit}>
        <div className="my-10 addMember-form-top ">
          <div

            className="form-control">
            <label className="label">
              <span className="text-white">Name</span>
            </label>
            <input required type="text" placeholder="Name" className="input shadow input-bordered input-addMember-form" name="name" />
          </div>
          <div

            className="form-control">
            <label className="label">
              <span className="text-white">Email</span>
            </label>

            <input required type="email" placeholder="Email" className="input shadow input-bordered input-addMember-form" name="email" />
          </div>
          <div

            className="form-control">
            <div
              className="form-control">
              <label className="label">
                <span className="text-white">ID</span>
              </label>
              <input
                required
                type="number"
                placeholder="ID"
                className="input shadow input-bordered font-family input-addMember-form"
                defaultValue={generatedID}
                name="id"
              />

            </div>
            <button
              type="button"
              onClick={handleGenerate}
              className="btn bg-teal-500 hover:bg-teal-800 text-white mt-3"
            >
              Generate an ID
            </button>
          </div>
          <div

            className="form-control">
            <label className="label">
              <span className="text-white">Password</span>
            </label>
            <input required type="text" placeholder="Password" className="input font-family shadow input-bordered input-addMember-form" name="password" />
          </div>
        </div>
        <div className="addMember-form-bottom">
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-teal-500 hover:bg-teal-800">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMember;