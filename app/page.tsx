import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default async function Home() {
  const tasks = await getAllTodos();

  return (
    <>
      <main className="max-w-4xl mx-auto px-5 mt-[100px] font-poppins">
        <div className="text-center my-7 flex justify-between gap-4">
          <h1 className="text-2xl font-bold">Todo List App</h1>
          <AddTask />
        </div>

        <TodoList tasks={tasks} />
      </main>
    </>
  );
}
