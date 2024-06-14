import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireAdmin = ({ children }) => {
    const navigate = useNavigate()
    const member = localStorage.getItem("member");

  const [admin, adminLoading, adminError] = useAuthState(auth);
  let location = useLocation();

  if(member){
    return navigate('/denied')
  }

  if (adminLoading) {
    return <Loading></Loading>;
  }
  if (!admin) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;