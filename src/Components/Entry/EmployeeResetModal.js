import React from 'react';
import { toast } from "react-toastify";
import useNotifyAdmin from '../hooks/useNotifyAdmin';

const EmployeeResetModal = () => {
    const [handleNotification] = useNotifyAdmin()

    const handleReset = (event) => {
        event.preventDefault();


        const userId = event.target.userId.value;
        const teamName = event.target.teamName.value;

        const adminEmail = event.target.adminEmail.value;
        const message = `One of your teammates holding the id: ${userId} has lost his password`
        const success = 'Your admin will contact you'
        const navLink = `/innerHome/${teamName}/manageEmployee`

        // console.log(forReset);
        handleNotification({ message, adminEmail, success, navLink })




    }


    return (
        <div>
            <input type="checkbox" id="employeeResetModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white border-y-4 border-primary">
                    <form onSubmit={handleReset}>
                        <div className="mb-8">
                            <div className="md:flex-1 mt-2 mb:mt-0 ">
                                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold p-2">
                                    REQUEST FOR RESET PASSWORD
                                </label>
                                <input
                                    required
                                    name="userId"
                                    className="w-full shadow-inner p-4 border-0 rounded-xl mb-5 outline-green-500"
                                    placeholder=" Enter Your Id"
                                ></input>
                                <input
                                    required
                                    name="adminEmail"
                                    className="w-full shadow-inner p-4 border-0 rounded-xl mb-5 outline-green-500"
                                    placeholder=" Enter Your Admin Email"
                                ></input>
                                <input
                                    required
                                    name="teamName"
                                    className="w-full shadow-inner p-4 border-0 rounded-xl mb-5 outline-green-500"
                                    placeholder=" Enter Your Team Name"
                                ></input>
                            </div>
                        </div>
                        <div className="modal-action">
                            <label for="employeeResetModal" className="btn btn-warning btn-sm px-5">
                                CANCEL
                            </label>
                            <button
                                for="employeeResetModal"
                                type="submit"
                                className="btn btn-primary text-white btn-sm px-5"
                            >
                                Assign
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EmployeeResetModal;