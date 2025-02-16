"use client";
import { Button } from "@heroui/react";
import { FaPlus } from "react-icons/fa6";
import React from "react";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { openModal } from "@/state/actions/modalActions";
import { RootState } from "@/state/types/rootStateTypes";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state:RootState) => state.modal.isOpen)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white-6 flex justify-between h-20 p-4 md:p-6 border-b border-white-7">
      <div className="text-3xl font-bold bg-gradient-to-r from-purple-10 to-purple-8 bg-clip-text text-transparent">
        PlanIt
      </div>
      <div className="flex justify-center items-center gap-4">
        <div className="flex lg:hidden gap-4 text-purple-9 font-semibold">
          <Link
            href="/home"
            className="hover:text-violet-950 text-bold transition duration-200"
          >
            Home
          </Link>
          <Link
            href="/tasks"
            className="hover:text-violet-950 text-bold transition duration-200"
          >
            Tasks
          </Link>
        </div>
        <Button
          disabled={isOpen}
          onPress={() => dispatch(openModal())}
          className="bg-purple-8 text-white-4"
          startContent={<FaPlus />}
          size="md"
        >
          New Task
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
