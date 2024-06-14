import useTask from "../hooks/useTask";

const useCompletedTasksTable = (setDetailsModal) =>{
    

    const completedTasksColumns = [
        {
            name: <h2 className="text-black text-lg font-bold">Assign Date</h2>,
            // here ct refers to each completed task
            selector: ct => <h2>{ct.taskDate}</h2>
        },
        {
            name: <h2 className="text-black text-lg font-bold">Deadline</h2>,
            selector: ct => <h2 className="text-teal-500 text-lg font-bold">{ct.deadline}</h2>
        },
        {
            name: <h2 className="text-black text-lg font-bold">Finish Date</h2>,
            selector: ct => <h2 className="text-teal-500 text-lg font-bold">{ct.taskDate}</h2>
        },
        
        {
            name: <h2 className="text-black text-lg font-bold">Task</h2>,
            selector: ct => <label for="details-modal" className="btn modal-button bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm" onClick={() => setDetailsModal(ct)}>
            DETAILS
          </label>
        },
    ]
    return [completedTasksColumns]
}
export default useCompletedTasksTable;