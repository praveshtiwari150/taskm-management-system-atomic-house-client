import React from "react";

interface IStatusLabel {
  status: string; 
  statusLabel: {
    [key: string]: {
      label: string;
      color: string;
    };
  };
}

const StatusLabel = ({ status, statusLabel }: IStatusLabel) => {
  const { label, color } = statusLabel[status] || {
    label: status, 
    color: "gray", // Default to gray if not found
  };

  // Map the color
  const getColorClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-800"; // Green for COMPLETED
      case "yellow":
        return "bg-yellow-100 text-yellow-800"; // Yellow for INPROGRESS
      case "blue":
        return "bg-blue-100 text-blue-800"; // Blue for ONGOING
      case "red":
        return "bg-red-100 text-red-800"; // Red for CANCELLED
      case "gray":
        return "bg-gray-100 text-gray-800"; // Gray for TODO
      default:
        return "bg-gray-100 text-gray-800"; // Default gray
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-medium ${getColorClass(
        color
      )}`}
      style={{ minWidth: "70px" }} 
    >
      {label}
    </span>
  );
};

export default StatusLabel;
