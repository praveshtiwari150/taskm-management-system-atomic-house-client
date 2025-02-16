import { Sidebar, Navbar } from "@/components/root-comps";
import { ReactNode } from "react";
import AddTaskForm from "@/components/forms/AddTaskForm";
interface IRootLayout {
  children: ReactNode;
}

const RootLayout = ({ children }: IRootLayout) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex flex-col md:flex-row pt-20">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col">
          <div className="w-full p-4 md:p-8">{children}</div>
        </section>
      </div>
      <AddTaskForm />
    </main>
  );
};

export default RootLayout;
