import React, { useState } from "react";
import { Button } from "@heroui/react";
import { TbEdit } from "react-icons/tb";
import EditTaskModal from "./EditTaskModal";
import { Task } from "@/state/types/taskType"; // Import Task type

interface EditRowProps {
  task: Task; // Receive the task to edit
}

const EditRow: React.FC<EditRowProps> = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Button
        size="sm"
        isIconOnly
        variant="light"
        aria-label="Edit"
        color="primary"
        onPress={handleOpen}
      >
        <TbEdit className="text-lg" />
      </Button>

      {/* Edit Modal */}
      {isModalOpen && (
        // @ts-ignore
        <EditTaskModal task={task} isOpen={isModalOpen} onClose={handleClose} />
      )}
    </>
  );
};

export default EditRow;
