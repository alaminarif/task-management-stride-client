import React, { useEffect, useState } from "react";
import useTask from "../../hooks/useTask";
import TaskModal from "./TaskModal";
import DataTable, { createTheme } from "react-data-table-component";

import useNotifyAdmin from "../../hooks/useNotifyAdmin";
import useMyTasksTable from "../../Tables/useMyTasksTable";

const AssignedTasks = () => {
  const [modalData, setModalData] = useState(null);
  const { tasks } = useTask();
  const tasksData = [...tasks].reverse();

  const [handleNotification] = useNotifyAdmin();

  // using react data table to show data

  const handleUpdateTaskStatus = (task) => {
    const adminEmail = task?.adminEmail;
    const id = task?._id;
    const name = task?.name;
    const teamName = task?.teamName;
    const message = `${name} has updated his task status`;
    const success = "Successfully updated";
    const navLink = `/innerHome/${teamName}/employeeTask`
    fetch(`https://tm-tool.onrender.com/task-member/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          handleNotification({ message, adminEmail, success, navLink });
        }
      });
  };

  const [myTasksColumns] = useMyTasksTable({ setModalData, handleUpdateTaskStatus });


  return (
    <div>
      <h1 className=" bg-teal-500 w-28 mx-auto py-1 rounded  text-center text-white my-8 font-bold">My Tasks</h1>

      <div 
       data-aos="zoom-in"
       data-aos-easing="linear"
       data-aos-duration="1000"
       className="mx-auto  lg:max-w-3xl xl:max-w-5xl rounded">
        <DataTable columns={myTasksColumns} data={tasksData} pagination highlightOnHover fixedHeader fixedHeaderScrollHeight="550px"></DataTable>
      </div>
      {modalData && <TaskModal modalData={modalData} setModalData={setModalData} />}
    </div>
  );
};

export default AssignedTasks;
