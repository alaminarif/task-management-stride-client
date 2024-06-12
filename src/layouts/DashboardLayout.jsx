import { useSignOut } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

const DashboardLayout = () => {
  // const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
    localStorage.removeItem("token");
  };

  return (
    <div className="bg-neutral grid grid-cols-12 ">
      <div className="bg-accent col-span-2 min-h-screen p-12 uppercase font-bold flex flex-col justify-between max-h-screen">
        <ul className=" ">
          <li className="  p-4 text w-full hover:bg-primary hover:rounded-lg">
            <Link to={"home"}>Profile</Link>
          </li>
          <li className=" p-4 text w-full hover:bg-primary hover:rounded-lg">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className=" p-4 text w-full hover:bg-primary hover:rounded-lg">
            <Link to={"all-users"}>Users</Link>
          </li>
          <li className=" p-4 text w-full hover:bg-primary hover:rounded-lg">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
        <ul className="">
          <li className=" p-4 text w-full btn btn-primary hover:bg-primary hover:rounded-lg" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
