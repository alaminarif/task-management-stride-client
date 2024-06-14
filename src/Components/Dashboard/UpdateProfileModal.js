import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const UpdateProfileModal = ({ openUpdateModal, setOpenUpdateModal, refetch, admin, adminProfile }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    // reset,
  } = useForm();
  const { email } = admin;

  const onSubmit = (data) => {
    if (email && data.name && data.number) {
      console.log(data);
      const url = `https://tm-tool.onrender.com/update-admin/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            toast.success("successfully updated");
            setOpenUpdateModal(null);
          }
        });
    }
  };

  return (
    <>
      <input type="checkbox" id="update-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="divider before:bg-teal-500 after:bg-teal-500">
            <h2 className=" uppercase md:text-4xl text-xl text-white font-bold">Update Info</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-1  flex flex-col">
              <div className="flex flex-col lg:flex-row lg:first-letter gap-4">
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="label font-bold">Your Name</label>
                  <input
                    defaultValue={adminProfile?.displayName}
                    className="input border-2 input-bordered w-full shadow-inner"
                    name="name"
                    placeholder="Enter Your Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name && <span className="text-red-500">name is required.</span>}
                </div>
                <div className="md:flex-1 mt-2 mb:mt-0 ">
                  <label className="label  font-bold">Phone Number</label>
                  <input
                    defaultValue={adminProfile?.phone}
                    className="input font-family border-2 input-bordered w-full shadow-inner"
                    placeholder="Your contact number"
                    name="number"
                    type="tel"
                    minLength="11"
                    {...register("number", {
                      required: true,
                    })}
                  />
                  {errors.number && <span className="text-red-500">Contact number is required</span>}
                </div>
              </div>
            </div>
            <div className="divider before:bg-teal-500 after:bg-teal-500">
              <button onClick={() => setOpenUpdateModal(null)} className=" btn btn-error text-white hover:bg-red-600  btn-sm px-5">
                Cancel
              </button>
              <button type="submit" className="btn modal-button bg-teal-500 hover:bg-teal-700 text-white border-none btn-sm">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileModal;
