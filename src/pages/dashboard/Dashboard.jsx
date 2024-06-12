// import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { Link } from "react-router-dom";
// import { auth } from "../../firebase/firebase.config";

// const Dashboard = () => {
//   const [user] = useAuthState(auth);
//   const [userInfo, setUserInfo] = useState();

//   // console.log(user.email);
//   // console.log(userInfo.email);
//   // console.log(userInfo.name);

//   useEffect(() => {
//     fetch(`https://task-management-stride-server.onrender.com/user/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => setUserInfo(data));
//   }, [user]);
//   // const{email, name, age, }=userInfo
//   console.log(userInfo);
//   console.log(userInfo);
//   return (
//     <div>
//       <div className="flex justify-between mb-7">
//         <h1 className="text-3xl ">Profile Information</h1>
//         <Link to={`/dashboard/profile/edit/${userInfo?._id}`} className="btn btn-neutral btn-md">
//           Edit Profile
//         </Link>
//       </div>
//       <div>
//         <h1>{userInfo?.name}</h1>
//         <h1>{userInfo?.email}</h1>
//         <h1>{userInfo?.age}</h1>
//         <h1>{userInfo?.mobileNumber}</h1>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useAuthState } from "react-firebase-hooks/auth";

import ProfileLogin from "../../assets/profile-login.png";
import { useState } from "react";
import { auth } from "../../firebase/firebase.config";
import UpdateProfileModal from "../../components/modal/UpdateProfileModal";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [updateUserModal, setUpdateUserModal] = useState(null);
  const { displayName, email, photoURL } = user;

  const url = `https://task-management-stride-server.onrender.com/user/${user?.email}`;
  const { data: users, isPending, refetch } = useQuery({ queryKey: ["myProfile"], queryFn: () => fetch(url).then((res) => res.json()) });

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className="">
      <h3 className="font-bold text-2xl"> My Profile</h3>
      <hr className="my-4" />
      <div className="flex flex-col items-center">
        <img src={photoURL ? photoURL : ProfileLogin} className={`w-48 rounded-lg mr-10 ${photoURL ? "border-2" : ""}`} alt="" />
        <div className="mt-6">
          <p>{users?.length}</p>
          <p className="font-bold ">
            <span className="text-xl">Name </span> : {users?.name ? users.name : displayName}
          </p>

          <p className="font-bold mt-2">
            {" "}
            <span className="text-xl">Email :</span> {email}
          </p>
          <p className="font-bold  mt-2">
            <span className="text-xl">Education :</span> {users?.email ? users?.education : "not avbileabel"}
          </p>
          <p className="font-bold mt-2">
            {" "}
            <span className="text-xl">Number :</span> {users?.email ? users?.number : "not a number"}
          </p>
          <p className="font-bold mt-2">
            <span className="text-xl">City : </span> {users?.email ? users?.address : "not a address"}
          </p>
          <label htmlFor="update-profile-modal" onClick={() => setUpdateUserModal({})} className="btn btn-primary my-4">
            Update Profile
          </label>
        </div>
      </div>
      {updateUserModal && (
        <UpdateProfileModal updateUserModal={updateUserModal} setUpdateUserModal={updateUserModal} refetch={refetch} users={users} />
      )}
    </div>
  );
};

export default Dashboard;
