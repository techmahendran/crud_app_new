import { ITask } from "@/types/tasks";
import React from "react";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <>
      <div className="max-h-[60vh] overflow-y-auto scrollbar-hide">
        <div className="overflow-x-auto border border-[#DDDDDD] rounded-lg">
          <table className="table w-full ">
            <thead>
              <tr className="border-none last:border-r-0">
                <th className="border-r border-[#DDDDDD] text-[17px]">Tasks</th>
                <th className="text-[17px]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </tbody>
          </table>
        </div>
        {tasks.length === 0 && (
          <div className=" mt-10 text-3xl font-medium text-center">No Task</div>
        )}
      </div>
    </>
  );
};

export default TodoList;
