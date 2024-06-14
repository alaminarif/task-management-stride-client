import { FAILED_NOTIFICATION, GET_NOTIFICATION, SUCCESS_NOTIFICATION } from "../constants/AllNotificationsConstant";
import { FAILED_FORWARDED_TASKS, GET_FORWARDED_TASKS, SUCCESS_FORWARDED_TASKS } from "../constants/ForwardedTasksConstants";
const initialState = {
    isLoading: false,
    data: [],
    error: null
}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        // reducing notification started here
        case GET_NOTIFICATION:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_NOTIFICATION:
            return {
                data: action.payload,
                isLoading: false,

            }
        case FAILED_NOTIFICATION:
            return {
                data: [],
                isLoading: false,
                error: action.payload

            }
            // reducing data for forwarded task page
            case GET_FORWARDED_TASKS:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_FORWARDED_TASKS:
            return {
                data: action.payload,
                isLoading: false,

            }
        case FAILED_FORWARDED_TASKS:
            return {
                data: [],
                isLoading: false,
                error: action.payload

            }
        default:
            return state;
    }
}