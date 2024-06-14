const useManageMembers = ({ setAssignTaskMember, setDeleteMember }) => {
  const manageMembersColumns = [
    {
      name: <h2 className="text-black text-lg font-bold pl-6">Name</h2>,
      selector: (member) => <h2 className="pl-6 text-black text-md font-bold uppercase">{member.name}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Member ID</h2>,
      selector: (member) => <h2 className="text-black font-family text-md font-bold"> {member.id}</h2>,
    },
    {
      name: <h2 className="text-black text-lg font-bold">Assign task</h2>,
      selector: (member) => (
        <>
          {" "}
          <label
            onClick={() => setAssignTaskMember(member)}
            htmlFor="my-modal-6"
            className="btn modal-button bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm"
          >
            Assign
          </label>
        </>
      ),
    },
    {
      name: <h2 className="text-black text-lg font-bold">Delete</h2>,
      selector: (member) => (
        <>
          {member?.id === "6169176" ? (
            <label>Non removable</label>
          ) : (
            <label
              onClick={() => setDeleteMember(member)}
              htmlFor="EmployeeDelete-modal"
              className="btn bg-red-500 text-white border-none hover:bg-red-600 btn-sm"
            >
              Delete
            </label>
          )}
        </>
      ),
    },
  ];

  return [manageMembersColumns];
};

export default useManageMembers;
