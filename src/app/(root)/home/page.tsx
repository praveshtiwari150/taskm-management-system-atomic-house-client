import { Modal } from "@heroui/react";
import TaskOverview from "../../../components/tasks-comps/TaskOverview";

const Home = () => {
  return (
    <div>
      <div>
        <div className="bg-purple-3 w-full p-6 md:p-8 rounded-lg shadow-sm">
          <h1 className="text-2xl md:text-3xl font-bold text-dark-5 mb-4">
            Welcome to PlanIt
          </h1>
          <p className="text-dark-5 font-medium">
            Start planning your tasks and projects here!
          </p>
        </div>
        <TaskOverview/>
      </div>
    </div>
  );
};

export default Home;
