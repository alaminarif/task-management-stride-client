import React from "react";

const CompleteDetailsModal = ({ detailsModal }) => {
  const { deadline, task, image, name, status } = detailsModal;
  return (
    <div className="mx-auto  lg:max-w-3xl xl:max-w-6xl p-6 rounded">
      <input type="checkbox" id="details-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label for="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h1 className="mt-5 text-gray-800 leading-10 text-sm md:text-xl font-bold">Task Deadline: {deadline}</h1>
          <h1 className=" text-gray-800 lg:leading-10 text-sm md:text-xl font-bold">
            Task Status: <span className="uppercase text-success">Completed</span>
          </h1>
          <h1 className="mt-2 text-gray-800 lg:leading-10 text-sm md:text-xl font-bold">Assigned Task: {task}</h1>
        </div>
      </div>
    </div>
  );
};

export default CompleteDetailsModal;
