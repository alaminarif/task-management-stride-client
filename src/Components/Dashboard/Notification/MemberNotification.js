import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberNotification = () => {
    const navigate = useNavigate()
    const [newNotification, setNewNotification] = useState([])
    const member = JSON.parse(localStorage.getItem("member"));
    const id = member?.id

    useEffect(() => {
        if (id) {
            
            fetch(`https://tm-tool.onrender.com/notification-member/${id}`)
                .then(res => res.json())
                .then(data => {
                    setNewNotification(data)

                })
        }
    }, [id, newNotification])

    const handleClearNotification = () => {
        fetch(`https://tm-tool.onrender.com/notification-clear-member/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {

                    navigate('/allNotifications')
                }
            })
    }
    return (
        <div>
            <div className="dropdown dropdown-end bg-slate-200 rounded-full mr-2" >
                <label tabIndex="0" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>  <span className={newNotification.length >= 1 ? 'badge badge-sm bg-red-600 text-white border-none indicator-item' : ' text-white border-none indicator-item'}>{newNotification.length >= 1 ? newNotification.length : ''}</span>
                    </div>
                </label>
                <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                    <div className="card-body">
                        <span className="font-bold text-lg">Notification</span>
                        <span className="text-info">{newNotification?.length >= 1 ? <ul>
                            {
                                newNotification.slice(0, 3).reverse().map(n => (<><li key={n?._id}>{n.message}</li>
                                    <hr /></>))
                            }
                        </ul> : 'You have no new notifications'}</span>
                        <div className="card-actions">

                            {
                                newNotification?.length >= 1 ? <button onClick={handleClearNotification} className="btn bg-teal-500 hover:bg-teal-700 btn-block">View Details</button> : <button className="btn bg-teal-500 hover:bg-teal-700 text-white  border-none btn-block" onClick={() => { navigate('/allNotifications') }}>View Previous Notifications</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberNotification;