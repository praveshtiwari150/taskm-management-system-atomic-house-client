import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/rootStateTypes";
import { AppDispatch } from "../store";
import { useCallback } from "react";
import { Task } from "../types/taskType";
import { setTasks, addTask, updateTask, deleteTask } from "../actions/tasksActions";
import { updateTaskQuery } from "@/lib/queryClient";
export const useTasks = () => {
    const dispatch = useDispatch<AppDispatch>();
    const tasks = useSelector((state: RootState) => state.tasksState.tasks)

    const handleSetTasks = useCallback((tasks: Task[]) => {
        dispatch(setTasks(tasks));
    }, [dispatch])

    const handleAddTask = useCallback((task: Task) => {
        dispatch(addTask(task));
    }, [dispatch]);

    

    const handleUpdateTask = useCallback(async (task: Task) => {
        // @ts-ignore
        const response = await updateTaskQuery(task)
        dispatch(updateTask(task));
    }, [dispatch]);

    const handleDeleteTask = useCallback((id: string) => {
        dispatch(deleteTask(id));
    }, [dispatch]);

    return {
        tasks,
        setTasks: handleSetTasks,
        addTask: handleAddTask,
        updateTask: handleUpdateTask,
        deleteTask: handleDeleteTask,
    };
}