import React, { useState } from "react";
import useTeamName from "../../hooks/useTeamName";
import { useQuery } from "react-query";
import { format } from "date-fns";
import Loading from "../../Shared/Loading/Loading";
import EmployeeTaskModalNew from "./EmployeeTaskModalNew";
import DataTable, { createTheme } from "react-data-table-component";
import useTodaysTasksTable from "../../Tables/useTodaysTasksTable";
import { useTableStyles } from "../../Tables/useTableStyles";

const TodaysTasks = () => {
  const [date, setDate] = useState(new Date());

  const [memberTaskModal, setMemberTaskModal] = useState(null);

  const { teamName } = useTeamName();
  let newDate = <p>{format(date, "PP")}</p>;
  const todaysDate = newDate.props.children;

  const { data: tasks, isLoading } = useQuery(["teamName", teamName], () =>
    fetch(`https://tm-tool.onrender.com/today-tasks?teamName=${teamName}&todaysDate=${todaysDate}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  const [customTableStyles] = useTableStyles();
  const [todaysTasksColumns] = useTodaysTasksTable({ setMemberTaskModal });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="w-36 mx-auto py-1 rounded  bg-teal-500 text-center text-white my-4 font-bold">Today's TASK</h1>

      <div
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
       className="mx-auto  lg:max-w-3xl xl:max-w-5xl rounded">
        <DataTable customStyles={customTableStyles} columns={todaysTasksColumns} pagination data={tasks}></DataTable>
        {memberTaskModal && <EmployeeTaskModalNew memberTaskModal={memberTaskModal} />}
      </div>
    </div>
  );
};

export default TodaysTasks;
