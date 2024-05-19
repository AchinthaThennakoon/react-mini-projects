import { composeWithDevTools } from "@redux-devtools/extension";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const  reducers = combineReducers({
    //all reducers here
})

const initialState = {}

const middleWare = [thunk]

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)