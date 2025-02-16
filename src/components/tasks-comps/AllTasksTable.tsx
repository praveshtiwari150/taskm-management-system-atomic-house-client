"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";
import StatusLabel from "./StatusLabel";
import { DeleteRow, EditRow } from "./table-actions";
import queryClient, { fetchTasks, deleteTaskQuery } from "@/lib/queryClient";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTasks } from "@/state/hooks/useTasks";

const AllTasksTable = () => {
  const columns = ["Title", "Status", "Description", "Actions"];
  const serverSideQuery = useQueryClient()
  const statusLabel = {
    ONGOING: {
      label: "on going",
      color: "blue", // Blue for ONGOING
    },
    INPROGRESS: {
      label: "in progress",
      color: "yellow", // Yellow for INPROGRESS
    },
    TODO: {
      label: "to do",
      color: "gray", // Gray for TODO
    },
    COMPLETED: {
      label: "completed",
      color: "green", // Green for COMPLETED
    },
    CANCELLED: {
      label: "cancelled",
      color: "red", // Red for CANCELLED
    },
  };

  const { tasks, setTasks, deleteTask:deleteTaskState } = useTasks();
  const { data, error, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const { mutate: handleDeleteTask } = useMutation({
    mutationFn: deleteTaskQuery, // Now accepts { id }
    onSuccess: (data) => {
      if (data?.success) {
        const deleTaskResponse = data?.data?.deletTask
        if (deleTaskResponse?.success) {
           deleteTaskState(deleTaskResponse.id);
           serverSideQuery.invalidateQueries({ queryKey: ["tasks"] }); // Refetch tasks
        };
      } else {
        console.error("Delete failed. Response:", data);
      }
    },
  });


  
  useEffect(() => {
    if (data?.tasks) {
      console.log("Data from API:", data.tasks);
      console.log("Current Tasks in State before update:", tasks);
      setTasks(data.tasks);
      console.log("Updated Tasks in State:", tasks);
    }
  }, [data, setTasks]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center text-dark-8 font-bold">Fetching Data....</div>
    )
  }
  return (
    <Table className="overflow-y-scroll max-h-[80vh]" aria-label="Tasks Table">
      <TableHeader className="">
        {columns.map((field, index) => (
          <TableColumn
            className="bg-purple-3 text-dark-8 text-sm font-bold"
            key={index}
          >
            {field}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow className="text-dark-10 font-medium" key={index}>
            <TableCell>{task.title}</TableCell>
            <TableCell>
              <StatusLabel status={task.status} statusLabel={statusLabel} />
            </TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>
              <DeleteRow taskId={task.id as string} onDelete={handleDeleteTask} />
              <EditRow task={task} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllTasksTable;
