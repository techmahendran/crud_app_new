"use client";

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };

  return (
    <tr key={task.id} className="border border-[#DDDDDD] border-l-0 border-r-0">
      <td className=" md:text-[16px] w-full border-r border-[#DDDDDD] last:border-r-0">
        {task.text}
      </td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500 md:w-[16px] md:h-[16px]"
          title="Edit task"
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full focus:outline-none focus:ring-0 md:text-[16px]"
              />
              <button
                type="submit"
                className="focus:outline-none text-nowrap text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-3 py-2.5"
              >
                Update Task
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500 md:w-[16px] md:h-[16px]"
          title="Delete task"
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3 className="text-lg font-medium w-[95%]">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="focus:outline-none relative right-5 text-[17px] border border-[#cccccc] text-blue-500 bg-white hover:text-white hover:bg-blue-600 rounded-lg px-3 py-2"
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
