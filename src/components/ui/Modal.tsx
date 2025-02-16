"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/types/rootStateTypes";
import { closeModal } from "@/state/actions/modalActions";
import { SlClose } from "react-icons/sl";

interface IModal {
  children: React.ReactNode;
}

const Modal = ({ children }: IModal) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white-7 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 p-6">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-purple-5/15 hover:text-purple-8 font-bold transition-colors"
        >
          <SlClose className="w-5 h-5 text-3xl text-dark-8" />
        </button>
        <div className="mt-4 ">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
