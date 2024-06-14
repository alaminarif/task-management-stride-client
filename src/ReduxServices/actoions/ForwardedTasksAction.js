import { FAILED_FORWARDED_TASKS, GET_FORWARDED_TASKS, SUCCESS_FORWARDED_TASKS } from "../constants/ForwardedTasksConstants";
import axios from "axios";

const getForwardedTasks = (teamName) => async (dispatch) => {
  dispatch({ type: GET_FORWARDED_TASKS });
  try {
    const result = await axios.get(`https://tm-tool.onrender.com/forwarded-task/${teamName}`);

    dispatch({ type: SUCCESS_FORWARDED_TASKS, payload: result.data });
  } catch (error) {
    dispatch({ type: FAILED_FORWARDED_TASKS, payload: error.message });
  }
};
export default getForwardedTasks;
