import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/types/rootStateTypes";
import { openModal, closeModal } from "@/state/actions/modalActions";

export const useModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);

    const handleOpen = () => dispatch(openModal());
    const handleClose = () => dispatch(closeModal());

    return { isOpen, handleOpen, handleClose };
}