"use client";

import { Task } from "@/types/types";
import React, { useEffect, useRef, useState } from "react";
import { deleteTodo, editTodo } from "../api/route";

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
  const ref = useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTaskTilte, setEditedTaskTilte] = useState<string>(todo.text);

  useEffect(() => {
    isEditing && ref.current?.focus();
  }, [isEditing]);

  const handleEdit = async () => {
    console.log("koko");
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    await editTodo({ id: todo.id, text: editedTaskTilte });
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
  };

  return (
    <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
      {isEditing ? (
        <input
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          type="text"
          value={editedTaskTilte}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEditedTaskTilte(e.target.value)
          }
          ref={ref}
        />
      ) : (
        <span className="text-gray-700">{todo.text}</span>
      )}

      <div>
        {isEditing ? (
          <button className="text-blue-500 mr-3" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            Edit
          </button>
        )}

        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDelete}
        >
          Remove
        </button>
      </div>
    </li>
  );
};
