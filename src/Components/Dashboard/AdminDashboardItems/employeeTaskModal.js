import React from 'react';

const EmployeeTaskModal = ({ memberTaskModal }) => {
    const taskCompletion = memberTaskModal.taskCompletion;
    
    var status = "";
    if(taskCompletion){
        status = <p className="py-4"><span className='text-2xl text-yellow-500 font-bold'>Task-Uncomplete</span></p>
    }
    else{
        status = <p className="py-4"><span className='text-2xl text-green-500 font-bold'>Task-Complete</span></p>
    }

    return (
        <div >
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label for="my-modal-4" className="modal cursor-pointer">
                <label
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                 className="modal-box relative shadow-2xl bg-base-100 border-y-4 border-primary" for="" >
                    <h3 className="text-lg font-bold"><span className='text-black font-bold'> Name: </span>{memberTaskModal.name}</h3>
                    <p className="py-4"><span className='text-black font-bold'> Task: </span>{memberTaskModal.task}</p>
                    <p className="py-4"><span className='text-black font-bold'> Dateline: </span>{memberTaskModal.deadline}</p>
                    <p className="py-4"><span className='text-black font-bold'>Task-Date: </span>{memberTaskModal.taskDate}</p>
                    {status}
                </label>
            </label>
        </div>
    );
};

export default EmployeeTaskModal;