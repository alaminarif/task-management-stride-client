import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import LoadingSpinner from "../../components/shared/LoadingSpinner";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
