import React from "react";

const useTodaysTasksTable = ({ setMemberTaskModal }) => {
  const todaysTasksColumns = [
    {
      name: <h2 className="pl-6 text-black text-lg font-bold">Name</h2>,
      selector: (task) => <h2 className=" pl-6 text-black text-md font-bold">{task.name}</h2>,
    },
    {
      name: <h2 className=" text-black text-lg font-bold">Member Id</h2>,
      selector: (task) => <h2 className=" text-black text-md font-family font-bold text-center">{task.memberId}</h2>,
    },
    {
      name: <h2 className=" text-black text-lg font-bold">Deadline</h2>,
      selector: (task) => <h2 className="text-black text-md font-family font-bold">{task.deadline}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Details</h2>,
      selector: (task) => (
        <label onClick={() => setMemberTaskModal(task)} for="my-modal-4" className="btn bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm">
          View Details
        </label>
      ),
    },
  ];
  return [todaysTasksColumns];
};

export default useTodaysTasksTable;
