import React from 'react';

const UncompletedTaskModal = ({ taskData, setTaskData }) => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1 className="text-lg uppercase text-center font-bold"> Task Details</h1>

          <h3 className="text-lg mt-4 font-bold">Task Assigned: {taskData.name}</h3>
          <p className="text-lg font-bold">Deadline: {taskData.deadline}</p>
          <p className="text-lg font-bold">Status: Pending</p>
          <p className="text-lg font-bold">Task Description: {taskData.task}</p>
          <div className="flex gap-5 justify-end mt-5">
            <button
              onClick={() => setTaskData(null)}
              className="btn btn-outline btn-error btn-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UncompletedTaskModal;