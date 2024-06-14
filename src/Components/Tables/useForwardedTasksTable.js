const useForwardedTasksTable = ({ setForwardTaskViewMessage }) => {
  const forwardedTasksTable = [
    {
      name: <h2 className="pl-6 text-black text-lg font-bold">Forwarded By</h2>,
      selector: (task) => <h2 className="pl-6 text-black text-md font-bold">{task?.name}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Assign Date</h2>,
      selector: (task) => <h2 className="text-black text-md font-bold">{task?.taskDate}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Deadline</h2>,
      selector: (task) => <h2 className="text-black text-md font-bold">{task?.deadline}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Message</h2>,
      selector: (task) => (
        <label for="forward-task-view-message" onClick={() => setForwardTaskViewMessage(task)} className="btn btn-sm bg-teal-500 border-0">
          view message
        </label>
      ),
    },
  ];
  return [forwardedTasksTable];
};
export default useForwardedTasksTable;
