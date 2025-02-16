import { IModalState } from "../types/modalActionTypes";
import {OPEN_MODAL, CLOSE_MODAL} from "@/state/types/modalActionTypes"

const initialState: IModalState = {
    isOpen: false
}

export const modalReducer = (state = initialState, action: { type: string }): IModalState => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default:
            return state;
    }
}