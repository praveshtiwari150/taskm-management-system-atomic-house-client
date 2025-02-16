import { combineReducers } from "@reduxjs/toolkit";
import { modalReducer } from "./modalReducer";
import { authReducer } from "./authReducer";
import { taskReducer } from "./tasksReducer";
const rootReducer = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    tasksState: taskReducer 
})

export default rootReducer;