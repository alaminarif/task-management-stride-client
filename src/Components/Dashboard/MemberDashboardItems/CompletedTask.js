import React, { useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import useCompletedTasksTable from "../../Tables/useCompletedTasksTable";
import CompleteDetailsModal from "./CompleteDetailsModal";
import DataTable, { createTheme } from "react-data-table-component";

const CompletedTask = () => {
  const [members, setMembers] = useState([]);
  const [detailsModal, setDetailsModal] = useState(null);
  const { completedTasks } = useTask();
  const [completedTasksColumns] = useCompletedTasksTable(setDetailsModal);

  // using theme

  // createTheme('solarized', {
  //   text: {
  //     primary: '#029743',
  //     secondary: '#2aa198',
  //   },
  //   background: {
  //     default: '#F7FEE7',
  //   },
  //   context: {
  //     background: '#029743',
  //     text: '#E2E8F0',
  //   },
  //   divider: {
  //     default: '#E2E8F0',
  //   },

  // }, 'dark');

  return (
    <div>
      <h1 className=" bg-teal-500 w-40 mx-auto py-1 rounded  text-center text-white my-8 font-bold">Completed Task</h1>
      <div
       data-aos="zoom-in"
       data-aos-easing="linear"
       data-aos-duration="1000"
        className="mx-auto  lg:max-w-3xl xl:max-w-5xl rounded">
        <DataTable columns={completedTasksColumns} data={completedTasks}></DataTable>
      </div>
      {detailsModal && <CompleteDetailsModal detailsModal={detailsModal} />}
    </div>
  );
};

export default CompletedTask;
