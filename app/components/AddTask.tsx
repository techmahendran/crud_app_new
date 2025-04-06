"use client";

import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className=" px-2.5 py-1.5 bg-green-500 text-white rounded outline-none"
      >
        Add new task
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className="font-bold text-lg text-left">Add new task</h3>
          <div className="modal-action">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)}
              type="text"
              placeholder="Add task here..."
              className="input input-bordered w-full focus:outline-none md:text-[16px]"
            />
            <button
              type="submit"
              className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-sm px-5 py-2.5 text-nowrap"
            >
              Add Task
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;
