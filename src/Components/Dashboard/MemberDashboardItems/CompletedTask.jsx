import React, { useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import CompleteDetailsModal from "./CompleteDetailsModal";

const CompletedTask = () => {
  const [members, setMembers] = useState([]);
  const [detailsModal, setDetailsModal] = useState(null);
  const [tasks] = useTask()
  console.log(tasks)
  return (
    <div>
      <h1 className=" bg-slate-900 w-48 mx-auto py-1 rounded  text-center text-white my-8 font-bold">Completed Task</h1>
      {/* <div className="w-full ">
        <table className="table w-3/4 mx-auto ">
          <thead>
            <tr>
              <th></th>
              <th className="text-sm font-bold">MEMBER NAME</th>
              <th className="text-sm font-bold">MEMBER Id</th>
              <th className="text-sm font-bold">TASK STATUS </th>
              <th className="text-sm font-bold">TASK</th>
            </tr>
          </thead>
          <tbody>
            {members.map((employee, index) => (
              <tr key={employee._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={employee.image} alt="" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{employee.name}</div>
                    </div>
                  </div>
                </td>

                <td className="text-xs font-bold">{employee._id}</td>

                <th>
                  <button className="btn btn-outline btn-warning btn-sm">COMPLETED</button>
                </th>
                <th>
                  <label for="details-modal" className="btn modal-button btn-outline btn-success btn-sm" onClick={() => setDetailsModal(employee)}>
                    DETAILS
                  </label>
                </th>
              </tr>
            ))}
            {detailsModal && <CompleteDetailsModal detailsModal={detailsModal} />}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default CompletedTask;

//
