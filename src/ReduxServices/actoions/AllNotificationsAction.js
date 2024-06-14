import { FAILED_NOTIFICATION, GET_NOTIFICATION, SUCCESS_NOTIFICATION } from "../constants/AllNotificationsConstant";
import axios from 'axios'

const getAllNotification = (finder) => async (dispatch) => {
    console.log(finder)
    dispatch({ type: GET_NOTIFICATION });
    try {
        const result = await axios.get(`https://tm-tool.onrender.com/all-notification/${finder}`);
        dispatch({ type: SUCCESS_NOTIFICATION, payload: result.data });
    } catch (error) {
        dispatch({ type: FAILED_NOTIFICATION, payload: error.message });
    }
}
export default getAllNotification;