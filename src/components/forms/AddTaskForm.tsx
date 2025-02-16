"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/types/rootStateTypes";
import {
  Button,
  Form,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@heroui/react";
import Modal from "@/components/ui/Modal";
import { useModal } from "@/state/hooks/modalHooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTaskQuery } from "@/lib/queryClient";
import { closeModal } from "@/state/actions/modalActions";

const AddTaskForm: React.FC = () => {
  const isOpen = useModal()

  const initalState = {
    title: "",
    description: "",
    status: "TODO",
  };

  const [taskData, setTaskData] = useState(initalState);

  const statusOptions = [
    { type: "COMPLETED", label: "Completed" },
    { type: "INPROGRESS", label: "In Progress" },
    { type: "TODO", label: "To Do" },
    { type: "CANCELLED", label: "Cancelled" },
  ];

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createTaskQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      setTaskData(initalState);
      closeModal();
    }
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setTaskData((prev) => ({ ...prev, status: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(taskData)
    mutate(taskData);
    setTaskData(initalState);
  };

  return (
    <Modal>
      <Form onSubmit={handleSubmit} validationBehavior="native">
        <Input
          isRequired
          errorMessage="Title is required"
          label="Title"
          labelPlacement="outside"
          name="title"
          placeholder="Title"
          type="text"
          value={taskData.title}
          onChange={handleChange}
        />
        <Textarea
          isRequired
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
        />

        <div className="w-full">
          <label className="text-sm font-medium" htmlFor="status">
            Status <span className="text-red-500">*</span>
          </label>
          <Select
            id="status"
            name="status"
            aria-label="Task Status"
            required
            selectedKeys={[taskData.status]}
            onSelectionChange={(keys) =>
              handleStatusChange(Array.from(keys)[0] as string)
            }
          >
            {statusOptions.map((element) => (
              <SelectItem key={element.type} value={element.type}>
                {element.label}
              </SelectItem>
            ))}
          </Select>
        </div>

        <Button
          disabled={isPending}
          type="submit"
          className="bg-purple-8 text-white-4"
          size="md"
        >
          {isPending ? "Adding..." : "Add Task"}
        </Button>
      </Form>
    </Modal>
  );
};

export default AddTaskForm;
