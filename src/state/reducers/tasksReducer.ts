import { Task, TaskState, TaskActionTypes, SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from "@/state/types/taskType";
import { RootState } from "@reduxjs/toolkit/query";
import { act } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";

const initialState: TaskState = {
    tasks: []
};

export const taskReducer = (state = initialState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? action.payload : task
                ),
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
}

