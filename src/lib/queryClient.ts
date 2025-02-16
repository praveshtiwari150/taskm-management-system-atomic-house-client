import { Task } from "@/state/types/taskType";
import { QueryClient } from "@tanstack/react-query";
import graphqlClient from "./graphqlClient";
import { gql } from "graphql-request";

const queryClient = new QueryClient();

export interface FetchTasksResponse {
    message: string;
    success: boolean;
    tasks: Task[]
}

export interface CreateTaskOperationResponse {
    message: string;
    success: boolean;
}
const GET_TASKS = `
    query {
            tasks{
            id
            title
            description
            status
        }
    }
`

export const ADD_TASK = gql`
    mutation CreateTask($title: String!, $description: String!, $status: TaskStatus!) {
        createTask(title: $title, description: $description, status: $status) {
            message
            success
  }
}
`;

export const DELETE_TASK = gql`
    mutation DeleteTask($id: ID!){
        deleteTask(id: $id){
            message
            success
            id
        }
    }
`

export const fetchTasks = async (): Promise<FetchTasksResponse> => {
    console.log('Fetch request is Triggered');
    const data = await graphqlClient.request<FetchTasksResponse>(GET_TASKS);
    return data;
};

export const createTaskQuery = async (variables: { title: string, description: string, status: string }): Promise<CreateTaskOperationResponse> => {
    try {
        console.log('Triggered createTaskQuery');
        const data = await graphqlClient.request<CreateTaskOperationResponse>(ADD_TASK, variables);
        return data;
    }
    catch (err) {
        console.log('createTaskQuery', err);
        return {
            message: 'Cannot creat task',
            success: false
        }
    }
};

export const deleteTaskQuery = async ({ id }: { id: string }) => {
    const response:any = await graphqlClient.request(DELETE_TASK, { id });
    return response.deleteTask
};

export const UPDATE_TASK = gql`
  mutation UpdateTask($id: ID!, $title: String, $description: String, $status: TaskStatus!) {
    updateTask(id: $id, title: $title, description: $description, status: $status) {
      message
      success
    }
  }
`;

export const updateTaskQuery = async (variables: { id: string; title?: string; description?: string; status: string }) => {
    try {
        console.log("Triggered updateTaskQuery");
        const data:any = await graphqlClient.request(UPDATE_TASK, variables);
        return data.updateTask;
    } catch (err) {
        console.log("updateTaskQuery error:", err);
        return { message: "Failed to update task", success: false };
    }
};



export default queryClient;