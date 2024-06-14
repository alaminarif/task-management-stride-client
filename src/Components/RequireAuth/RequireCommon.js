import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";

const RequireCommon = ({ children }) => {
    const navigate = useNavigate();
    let location = useLocation();
    const member = localStorage.getItem("member");
    const [admin, adminLoading, adminError] = useAuthState(auth);

    if (adminLoading) {
        return <Loading></Loading>;
    }
    if (!admin && !member) {

        return <Navigate to="/home" state={{ from: location }} replace />;
    }


    return children;
};

export default RequireCommon;