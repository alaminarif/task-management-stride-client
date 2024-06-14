import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireMember = ({ children }) => {
const navigate= useNavigate()
const [admin, adminLoading, adminError] = useAuthState(auth);
const member = localStorage.getItem("member");
let location = useLocation();

if(admin){
    return navigate('/denied')
}

if (!member) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireMember;