import { Task, TaskActionTypes, SET_TASKS, ADD_TASK, UPDATE_TASK, DELETE_TASK } from "@/state/types/taskType";

export const setTasks = (tasks: Task[]): TaskActionTypes => ({
    type: SET_TASKS,
    payload: tasks,
});

export const addTask = (task: Task): TaskActionTypes => ({
    type: ADD_TASK,
    payload: task,
});

export const updateTask = (task: Task): TaskActionTypes => ({
    type: UPDATE_TASK,
    payload: task,
});

export const deleteTask = (id: string): TaskActionTypes => ({
    type: DELETE_TASK,
    payload: id,
});