import React, { useState } from "react";
import useTask from "../../hooks/useTask";
import DataTable, { createTheme } from "react-data-table-component";
// import TaskModal from './TaskModal';
import UncompletedTaskModal from "./UncompletedTaskModal";
import useUncompletedTasksTable from "../../Tables/useUnCompletedTasksTable";
import ForwordTaskModal from "./ForwordTaskModal";

const UncompletedTask = () => {
  const [taskData, setTaskData] = useState(null);
  const [taskForword, setTaskForword] = useState(null);
  const { unCompletedTasks } = useTask();
  const [unCompletedTasksColumns] = useUncompletedTasksTable({ setTaskForword, setTaskData });

  return (
    <div className="">
      <h1 className=" bg-teal-500 w-44 mx-auto py-1 rounded  text-center text-white my-8 font-bold">Uncompleted Task</h1>
      <div
       data-aos="zoom-in"
       data-aos-easing="linear"
       data-aos-duration="1000"
        className="mx-auto  lg:max-w-3xl xl:max-w-5xl rounded">
        <DataTable columns={unCompletedTasksColumns} data={unCompletedTasks}></DataTable>
      </div>
      {taskData && <UncompletedTaskModal taskData={taskData} setTaskData={setTaskData} />}
      {taskForword && <ForwordTaskModal taskForword={taskForword} setTaskForword={setTaskForword} />}
    </div>
  );
};

export default UncompletedTask;
