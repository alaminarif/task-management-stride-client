import AssignTaskModal from "./AssignTaskModal";
import EmployeeDeleteModal from "./EmployeeDeleteModal";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase.init";
import { useQuery } from "react-query";
import useTeamName from "../../hooks/useTeamName";
import DataTable, { createTheme } from "react-data-table-component";

import Loading from "../../Shared/Loading/Loading";
import useManageMembers from "../../Tables/useManageMembers";

const ManageEmployee = () => {
  const [admin, adminLoading, adminError] = useAuthState(auth);
  const email = admin?.email;
  const [deleteMember, setDeleteMember] = useState(null);
  const [assignTaskMember, setAssignTaskMember] = useState(null);
  const { teamName } = useTeamName();

  const {
    data: members,
    refetch,
    isLoading,
  } = useQuery(["owner", email], () =>
    fetch(`https://tm-tool.onrender.com/members?email=${email}&teamName=${teamName}`, {
      method: "GET",
    }).then((res) => res.json())
  );

  const [manageMembersColumns] = useManageMembers({ setAssignTaskMember, setDeleteMember });

  const [customTableStyles] = useManageMembers({});
  if (adminLoading || isLoading) {
    return <Loading />;
  }
  return (
    <div>

      <h1 className=" bg-teal-500 w-56 mx-auto py-1 rounded  text-center text-white my-8 font-bold">MANAGE ALL MEMBER</h1>
      <div 
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="mx-auto  lg:max-w-3xl xl:max-w-5xl rounded">
        <DataTable customTableStyles={customTableStyles} columns={manageMembersColumns} data={members} pagination></DataTable>
      </div>
      {assignTaskMember && <AssignTaskModal assignTaskMember={assignTaskMember} setAssignTaskMember={setAssignTaskMember} />}
      {deleteMember && <EmployeeDeleteModal refetch={refetch} deleteMember={deleteMember} />}
    </div>
  );
};

export default ManageEmployee;
