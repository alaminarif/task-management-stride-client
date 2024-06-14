import React from 'react';

const TaskForwarding = () => {
  // this file is useless   
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
    return (
      <div>
        <h1 className=" bg-secondary w-36 mx-auto py-1 rounded  text-center text-white my-8 font-bold">
          Task Forword
        </h1>
        <div className="w-full ">
          <table className="table w-3/4 mx-auto ">
            <thead>
              <tr>
                <th></th>
                <th className="text-sm font-bold">MEMBER NAME</th>
                <th className="text-sm font-bold">MEMBER Id</th>
                <th className="text-sm font-bold">TASK STATUS </th>
                <th className="text-sm font-bold">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {members.map((employee, index) => (
                <tr key={employee._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-14 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img src={employee.image} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{employee.name}</div>
                      </div>
                    </div>
                  </td>

                  <td className="text-xs font-bold">{employee._id}</td>

                  <th>
                    <span className="uppercase text-xs bg-yellow-500 text-white p-1 rounded">
                      UNCOMPLETED
                    </span>
                  </th>
                  <th>
                    <button className="btn btn-outline btn-success btn-sm">
                      FORWARD
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default TaskForwarding;