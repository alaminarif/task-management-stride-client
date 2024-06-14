import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const AttendanceReports = () => {
    const [date, setDate] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>{format(date, 'PP')} Attendance</p>;
    }
    const members = [
        {
            _id: "546",
            name: "Haider Nayeem",
            image: "https://placeimg.com/192/192/people",
        },
        {
            _id: "462",
            name: "Mahmudul Hasan",
            image: "https://placeimg.com/192/192/people",
        },
        {
            _id: "646",
            name: "Jobair Sarkar",
            image: "https://placeimg.com/192/192/people",
        },
        {
            _id: "985",
            name: "Shahid Islam",
            image: "https://placeimg.com/192/192/people",
        },
        {
            _id: "975",
            name: "Saif Emon",
            image: "https://placeimg.com/192/192/people",
        },
    ];
    const attendanceData = [
        {
            name: 'Total Employee',
            TotalEmployee: 4000,
            Present: 2400,
        },


    ];

    return (
        <div>
            <h2 className='bg-slate-900 w-60 mx-auto rounded  text-center text-white my-8 font-bold'>Select A Attendance Date</h2>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse bg-gradient-to-t from-pink-500 to-orange-400 w-full rounded-xl p-20">
                    <div className="w-full lg:w-[50%] h-full flex justify-center p-10 items-center -z-30 ml-16">
                        <BarChart width={730} height={250} data={attendanceData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="TotalEmployee" fill="#8884d8" />
                            <Bar dataKey="Present" fill="#82ca9d" />
                        </BarChart>
                    </div>
                    <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-y-4 border-indigo-500'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate} />

                    </div>
                </div>
            </div>
            <div>
                <h1 className=" bg-slate-900 w-60 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
                    <h2>{footer}</h2>
                </h1>
                <div className="w-full ">
                    <table className="table w-3/4 mx-auto ">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="text-sm font-bold">MEMBER NAME</th>
                                <th className="text-sm font-bold">MEMBER ID</th>
                                <th className="text-sm font-bold">ATTENDANCE</th>

                            </tr>
                        </thead>
                        <tbody >
                            {members.map((member, index) => (
                                <tr key={member._id}>
                                    <th>
                                        {index + 1}

                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={member.image} alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{member.name}</div>

                                            </div>
                                        </div>
                                    </td>

                                    <td className="text-xs font-bold">{member._id}</td>

                                    <th>
                                        <button className="btn btn-outline btn-success btn-sm">
                                            PRESENT
                                        </button>
                                    </th>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AttendanceReports;