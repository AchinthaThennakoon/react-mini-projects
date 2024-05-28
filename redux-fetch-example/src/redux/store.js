import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlicer'

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})