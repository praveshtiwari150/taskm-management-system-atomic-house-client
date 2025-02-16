import AllTasksTable from '@/components/tasks-comps/AllTasksTable';
import React from 'react'

const Tasks = () => {
  return (
    <div>
      <h1 className="text-dark-8 text-4xl font-extrabold mb-8">All Tasks</h1>
      <AllTasksTable/>
    </div>
  );
}

export default Tasks
