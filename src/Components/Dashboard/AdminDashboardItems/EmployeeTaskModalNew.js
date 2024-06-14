import React from 'react';

const EmployeeTaskModalNew = ({ memberTaskModal }) => {
    const taskCompletion = memberTaskModal.taskCompletion;
    
    var status = "";
    if(taskCompletion){
        status = <p className="py-4"><span className='text-2xl text-teal-500 font-bold'>Done</span></p>
    }
    else{
        status = <p className="py-4"><span className='text-2xl text-yellow-500 font-bold'>Pending</span></p>

    }

    return (
        <div >
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" className="modal cursor-pointer">
                <label
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                 className="modal-box relative shadow-2xl bg-base-100 border-y-4 border-teal-500" for="" >
                    <h3 className="text-lg font-bold"><span className='text-black font-bold'> Name: </span>{memberTaskModal.name}</h3>
                    <p className="py-4"><span className='text-black font-bold'> Task: </span>{memberTaskModal.task}</p>
                    <p className="py-4"><span className='text-black font-bold '> Dateline: </span><span className="font-family">{memberTaskModal.deadline}</span></p>
                    <p className="py-4"><span className='text-black font-bold'>Task-Date: </span><span className="font-family">{memberTaskModal.taskDate}</span></p>
                    {status}
                </label>
            </label>
        </div>
    );
};

export default EmployeeTaskModalNew;