"use client"
import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/lib/queryClient";
import { Task } from "@/state/types/taskType";

const TaskOverview = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  const tasks: Task[] = data?.tasks || [];

  // Count tasks by status
  const taskCounts = {
    completed: tasks.filter((task) => task.status === "COMPLETED").length,
    inProgress: tasks.filter((task) => task.status === "INPROGRESS").length,
    cancelled: tasks.filter((task) => task.status === "CANCELLED").length,
    todo: tasks.filter((task) => task.status === "TODO").length,
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold text-dark-5">Task Overview</h2>
      {isLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">To-Do</h3>
            <p className="text-2xl font-bold">{taskCounts.todo}</p>
          </div>

          <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">In Progress</h3>
            <p className="text-2xl font-bold">{taskCounts.inProgress}</p>
          </div>

          <div className="p-4 bg-green-100 text-green-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Completed</h3>
            <p className="text-2xl font-bold">{taskCounts.completed}</p>
          </div>

          <div className="p-4 bg-red-100 text-red-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Cancelled</h3>
            <p className="text-2xl font-bold">{taskCounts.cancelled}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskOverview;
