const useAssignedTasksTable = ({ setMemberTaskModal }) => {
  const assignedTasksColumns = [
    {
      name: <h2 className="pl-6 text-black text-lg font-bold">Member Name</h2>,
      selector: (task) => <h2 className="pl-6 text-black text-md font-bold">{task.name}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Member ID</h2>,
      selector: (task) => <h2 className="text-black text-md font-family font-bold">{task.memberId}</h2>,
    },
    {
      name: <h2 className="text-black text-lg  font-bold">Date</h2>,
      selector: (task) => <h2 className={task.taskCompletion !== true && "text-teal-600 font-family text-md"}>{task.taskDate}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Details</h2>,
      selector: (task) => (
        <label
          onClick={() => setMemberTaskModal(task)}
          for="my-modal-4"
          className="btn modal-button bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm"
        >
          DETAILS
        </label>
      ),
    },
  ];

  return [assignedTasksColumns];
};

export default useAssignedTasksTable;
