import React from "react";

const ForwardTaskViewMessageModal = ({ forwardTaskViewMessage }) => {
  return (
    <div>


      <input type="checkbox" id="forward-task-view-message" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{forwardTaskViewMessage?.issue}</h3>

          <div className="modal-action">
            <label for="forward-task-view-message" className="btn bg-teal-500  border-0">
              cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForwardTaskViewMessageModal;
