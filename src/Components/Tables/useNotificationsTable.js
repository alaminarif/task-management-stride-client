import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";

const useNotificationsTable = () => {
    const notificationsTableColumns = [
        {
            name: <h2>Notifications</h2>,
            selector: ntc => <Link to={`${ntc?.navLink}`}>{ntc?.message}</Link>
        }
    ]
    return [notificationsTableColumns];

}
export default useNotificationsTable;