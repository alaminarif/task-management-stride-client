// import React, { useEffect, useState } from 'react';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
const ManageAttendance = () => {
  const { isLoading, data, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
  }, []);
  if (isLoading) {
    return <Loading />
  }
  if (error) {

    toast.error(`${error.message}`)

  }

  const handlePresent = (id) => {
    fetch(`https://tm-tool.onrender.com/manage-attendance/present/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('well done!')
        }
      });
  };
  return (
    <div>
      <h1 className=" bg-slate-900 w-72 mx-auto py-1 rounded  text-center text-white my-8 font-bold">MANAGE MEMBERS ATTENDANCE</h1>
      <div className="w-full ">
        <table className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER ID</th>
              <th className="text-sm font-bold">ATTENDANCE</th>
            </tr>
          </thead>
          <tbody>
            {data.map((member, index) => (
              <tr key={member._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={member.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{member.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-xs font-bold">{member.id}</td>

                <th>
                  <button
                    onClick={() => handlePresent(member._id)}
                    className="btn btn-outline btn-success btn-sm"
                    disabled={member.presentStatus === true}
                  >
                    PRESENT
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAttendance;
