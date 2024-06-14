const useMyTasksTable = ({ handleUpdateTaskStatus, setModalData }) => {
  const myTasksColumns = [
    {
      name: <h1 className="pl-6 text-black text-lg font-bold">Assign Date</h1>,
      selector: (task) => <h1 className="pl-6 text-black text-md font-bold">{task.taskDate}</h1>,
    },
    {
      name: <h1 className="text-black text-lg font-bold">Task Status</h1>,
      selector: (task) => (
        <h1 className={task?.taskCompletion ? "text-green-500 text-lg font-bold" : "text-red-600"}>{task.taskCompletion ? "Done" : "pending"}</h1>
      ),
    },
    {
      name: <h1 className="text-black text-lg font-bold">Task Deadline</h1>,
      selector: (task) => <h1 className="text-teal-500 text-lg font-bold">{task.deadline}</h1>,
    },
    {
      name: <h1 className="text-black text-lg font-bold">Update</h1>,
      selector: (task) => (
        <button onClick={() => handleUpdateTaskStatus(task)} disabled={task.taskCompletion === true} className="btn bg-teal-500 text-white btn-sm">
          UPDATE
        </button>
      ),
    },
    {
      name: <h1 className="text-black text-lg font-bold">View Task</h1>,
      selector: (task) => (
        <label
          onClick={() => setModalData(task)}
          for="my-modal-3"
          className="btn bg-teal-500 text-white hover:bg-teal-700 border-none btn-sm modal-button"
        >
          View Task
        </label>
      ),
    },
  ];

  return [myTasksColumns];
};
export default useMyTasksTable;
