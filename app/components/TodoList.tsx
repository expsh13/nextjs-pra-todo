import { Task } from "@/types/types";
import React from "react";

type PropsType = {
  todos: Task[];
};

export const TodoList = ({ todos }: PropsType) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

type TodoPropsType = {
  todo: Task;
};

const Todo = ({ todo }: TodoPropsType) => {
  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      <span className="text-gray-700">{todo.text}</span>
      <button className="text-red-500 hover:text-red-700">Remove</button>
    </li>
  );
};
