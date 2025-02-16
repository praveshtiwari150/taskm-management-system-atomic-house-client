import React from "react";

const RootPage = () => {
  return (
    <div className="h-[80vh] rounded-2xl border-purple-2 flex flex-col items-center justify-center bg-white-2 text-dark-5 p-6 text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-10 to-purple-8 bg-clip-text text-transparent">
        Welcome to PlanIt
      </h1>
      <p className="text-lg mt-4 max-w-2xl">
        Take control of your tasks and projects with ease. Stay organized, track
        your progress, and make every task count!
      </p>
      <p className="text-md mt-2 text-dark-7">
        Your journey to better productivity starts here. Plan it. Track it.
        Achieve it.
      </p>
      <div className="mt-6">
        <span className="text-purple-8 font-semibold">
          🚀 Start planning today!
        </span>
      </div>
    </div>
  );
};

export default RootPage;
