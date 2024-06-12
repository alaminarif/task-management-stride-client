/* eslint-disable react/prop-types */
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { auth } from "../../firebase/firebase.config";

// const UpdateProfileModal = ({ refetch }) => {
//   const { register, handleSubmit, reset } = useForm();
//   const [user] = useAuthState(auth);

//   console.log(register);
//   const onSubmit = (data) => {
//     const url = `https://task-management-stride-server.onrender.com/user/${user?.email}`;
//     fetch(url, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         if (result.modifiedCount) {
//           toast.success("success added");

//           refetch();
//         }
//       });
//     reset();
//   };
//   return (
//     <div>
//       <input type="checkbox" id="update-profile-modal" className="modal-toggle" />
//       <div className="modal modal-bottom sm:modal-middle shadow-xl">
//         <div className="modal-box relative">
//           <label htmlFor="update-profile-modal" className="btn btn-sm btn-circle bg-transparent absolute right-2 top-2">
//             ✕
//           </label>
//           <div className="">
//             <form onSubmit={handleSubmit(onSubmit)} className="w-96 bg-base-100  text-black ">
//               <input
//                 className="input input-bordered w-full mt-6 "
//                 placeholder="email"
//                 type="text"
//                 value={user?.email}
//                 readOnly
//                 {...register("email")}
//               />
//               <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
//                 <input className="input input-bordered w-full " placeholder="Education" type="text" {...register("education")} />

//                 <input className="input input-bordered w-full " placeholder="Number" type="text" {...register("number")} />

//                 <input className="input input-bordered w-full " placeholder="Address" type="text" {...register("address")} />

//                 <input className="btn btn-primary w-full" type="submit" value="Submit" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfileModal;

/* eslint-disable react/prop-types */
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebase.config";

const UpdateProfileModal = ({ refetch }) => {
  const { register, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = async (data) => {
    const url = `https://task-management-stride-server.onrender.com/user/${user?.email}`;
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);

      if (result.modifiedCount) {
        toast.success("Profile updated successfully");
        refetch();
      } else {
        toast.error("Failed to update profile");
      }
    } catch (error) {
      toast.error("An error occurred while updating the profile");
    }

    reset();
  };

  return (
    <div>
      <input type="checkbox" id="update-profile-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle shadow-xl">
        <div className="modal-box relative">
          <label htmlFor="update-profile-modal" className="btn btn-sm btn-circle bg-transparent absolute right-2 top-2">
            ✕
          </label>
          <div className="grid grid-cols-1 justify-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 justify-items-center gap-6 w-96 bg-base-100 text-black">
              <input
                className="input input-bordered w-full mt-6"
                placeholder="email"
                type="text"
                value={user?.email}
                readOnly
                {...register("email")}
              />
              <div className="grid grid-cols-1 justify-items-center gap-6 py-6 w-full">
                <input className="input input-bordered w-full" placeholder="Education" type="text" {...register("education")} />
                <input className="input input-bordered w-full" placeholder="Number" type="text" {...register("number")} />
                <input className="input input-bordered w-full" placeholder="Address" type="text" {...register("address")} />
                <input className="btn btn-primary w-full" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
