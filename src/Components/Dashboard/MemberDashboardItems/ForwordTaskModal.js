import React, { useState } from "react";
import { toast } from "react-toastify";
import useNotifyAdmin from "../../hooks/useNotifyAdmin";

const ForwordTaskModal = ({ taskForword, setTaskForword }) => {
  const [issue, setIssue] = useState("");
  const [handleNotifyAdmin] = useNotifyAdmin();
  const handleForward = (taskInfo) => {
    const adminEmail = taskInfo.adminEmail;
    const memberId = taskInfo.memberId;
    const deadline = taskInfo.deadline;
    const name = taskInfo.name;
    const task = taskInfo.task;
    const teamName = taskInfo.teamName;
    const taskDate = taskInfo.taskDate;

    const info = {
      adminEmail,
      memberId,
      deadline,
      name,
      task,
      teamName,
      taskDate,
      issue,
    };

    const message = `${name} (${memberId})  has forwarded his task`;
    const success = "Task forwarded successfully";
    const navLink = `/innerHome/${teamName}/forwardedTask`

    if (taskInfo.teamName) {
      fetch("https://tm-tool.onrender.com/forward-task-api", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setTaskForword(null);
            handleRemoveUncompletedTask(taskInfo?._id);
          }
        });
    }
    const handleRemoveUncompletedTask = (id) => {
      fetch(`https://tm-tool.onrender.com/forward-task/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            handleNotifyAdmin({ message, adminEmail, success, navLink });
          }
        });
    };
  };
  return (
    <div>
      <input type="checkbox" id="forword-task-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Why are you forwarding?</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Issue</span>
            </label>
            <input type="text" onBlur={(e) => setIssue(e.target.value)} required placeholder="Issue" className="input input-bordered" name="issue" />
          </div>
          <div className="modal-action">
            <button type="button" onClick={() => handleForward({ ...taskForword, issue })} className="btn bg-teal-500 text-white">
              Submit
            </button>
            <label for="forword-task-modal" className="btn btn-warning">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwordTaskModal;
