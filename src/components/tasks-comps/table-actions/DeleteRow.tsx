import { useTasks } from "@/state/hooks/useTasks";
import { Button } from "@heroui/react";
import { MdOutlineDelete } from "react-icons/md";

interface DeleteRowProps {
  taskId: string;
  onDelete: (id: { id: string }) => void;
}
const DeleteRow = ({ taskId, onDelete }: DeleteRowProps) => {

  const handleClick = () => {
    const isConfirm = window.confirm("Confirm to delete.")
    if (isConfirm) {
      onDelete({ id: taskId });
      window.location.reload();
    }
  };

  return (
    <Button
      size="sm"
      variant="light"
      onPress={handleClick}
      isIconOnly
      aria-label="Delete"
      color="danger"
    >
      <MdOutlineDelete className="text-lg" />
    </Button>
  );
};

export default DeleteRow;
