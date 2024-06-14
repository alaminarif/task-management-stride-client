import React from "react";
import { toast } from "react-toastify";

const EmployeeDeleteModal = ({ deleteMember, refetch }) => {
  const { _id } = deleteMember;

  const handleDeleteMember = (id) => {
    fetch(`https://tm-tool.onrender.com/member/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          if (data.acknowledged) {
            refetch();
            toast.success("This member is deleted successfully!");
          }
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="EmployeeDelete-modal" className="modal-toggle" />
      <div 
      className="modal modal-bottom sm:modal-middle">
        <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="modal-box bg-white border-y-4 border-teal-500">
          <h3 className="font-bold text-lg">
            Are you sure? Do you want to delete this member?
          </h3>
          <p className="py-4"></p>
          <div className="modal-action">
            <label
              for="EmployeeDelete-modal"
              className="btn bg-teal-500 hover:bg-teal-700 border-none btn-sm px-5"
            >
              CANCEL
            </label>
            <label
              onClick={() => handleDeleteMember(_id)}
              for="EmployeeDelete-modal"
              className="btn btn-error text-white hover:bg-red-600  btn-sm px-5"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDeleteModal;
