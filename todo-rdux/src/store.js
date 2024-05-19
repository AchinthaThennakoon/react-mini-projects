import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { ToDoReducer } from "./reducers/ToDoReducer";

const  reducers = combineReducers({
    Todo: ToDoReducer
})

const initialState = {}

const middleWare = [thunk]

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)