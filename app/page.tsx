import { AddTask } from "@/app/components/AddTask";
import { TodoList } from "@/app/components/TodoList";
import { getAllTodos } from "./api/route";

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        next 13 todo app
      </h1>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
