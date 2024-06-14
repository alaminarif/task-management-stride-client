import { applyMiddleware, createStore,} from "redux";
import thunk from "redux-thunk";
import { MainReducer } from "./ReduxServices/reducers/mainReducer";

const store = createStore(MainReducer, applyMiddleware(thunk));

export default store;
