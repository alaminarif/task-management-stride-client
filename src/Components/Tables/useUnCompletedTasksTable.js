const useUncompletedTasksTable = ({ setTaskData, setTaskForword }) => {
  const unCompletedTasksColumns = [
    {
      name: <h2 className="text-black text-lg font-bold">Assign Date</h2>,
      selector: (utc) => <h2>{utc.taskDate}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">DeadLine</h2>,
      selector: (utc) => <h2>{utc.deadline}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">View Details </h2>,
      selector: (utc) => (
        <label onClick={() => setTaskData(utc)} for="my-modal-6" className="btn modal-button btn-outline btn-success btn-sm">
          DETAILS
        </label>
      ),
    },
    {
      name: <h2 className="text-black text-lg font-bold">Forward 2</h2>,
      selector: (utc) => (
        <label onClick={() => setTaskForword(utc)} for="forword-task-modal" className="btn modal-button btn-outline btn-success btn-sm">
          Forward
        </label>
      ),
    },
  ];
  return [unCompletedTasksColumns];
};
export default useUncompletedTasksTable;
