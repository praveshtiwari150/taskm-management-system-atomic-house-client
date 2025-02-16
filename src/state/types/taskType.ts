export interface Task  {
    id: String;
    title: String;
    description: String
    status: "COMPLETED" | "INPROGRESS" | "TODO" | "CANCELLED"
}

export interface TaskState{
    tasks: Task[]
}

export const SET_TASKS = 'SET_TASK';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface TaskState {
    tasks: Task[];
}


interface SetTasksAction {
    type: typeof SET_TASKS;
    payload: Task[];
}

interface AddTaskAction {
    type: typeof ADD_TASK;
    payload: Task;
}

interface UpdateTaskAction {
    type: typeof UPDATE_TASK;
    payload: Task;
}

interface DeleteTaskAction {
    type: typeof DELETE_TASK;
    payload: string;
}

export type TaskActionTypes = SetTasksAction | AddTaskAction | UpdateTaskAction | DeleteTaskAction;