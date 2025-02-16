import React, { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTaskQuery } from "@/lib/queryClient";
import { Task } from "@/state/types/taskType";

interface UpdateTaskInput {
  id: string;
  title?: string;
  description?: string;
  status: "TODO" | "INPROGRESS" | "COMPLETED" | "CANCELLED";
}

interface EditTaskModalProps {
  task: UpdateTaskInput;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  task,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const [formData, setFormData] = useState<UpdateTaskInput>({
    id: task.id,
    title: task.title,
    description: task.description,
    status: task.status,
  });

  const queryClient = useQueryClient();

  // Reset formData when modal opens with a new task
  useEffect(() => {
    if (isOpen) {
      setFormData({
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
      });
    }
  }, [isOpen, task]);

  const { mutate: handleUpdateTask, isPending } = useMutation({
    mutationFn: updateTaskQuery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Refresh task list
      onClose(); // Close modal
      onUpdate(); // Notify parent
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUpdateTask(formData);
  };

  return (
    <Modal className="bg-white-7" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Edit Task</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <Input
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              >
                <option value="TODO">To Do</option>
                <option value="INPROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
            <ModalFooter>
              <Button type="button" variant="light" onClick={onClose}>
                Cancel
              </Button>
              <Button className="bg-purple-8" type="submit" color="primary" disabled={isPending}>
                {isPending ? "Updating..." : "Save Changes"}
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;
