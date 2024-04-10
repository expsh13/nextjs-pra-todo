"use client";
import React, { FormEvent, useState } from "react";
import { addTodo } from "../api/route";
import { v4 as uuidv4 } from "uuid";

export const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ id: uuidv4(), text: taskTitle });
    setTaskTitle("");
  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        onChange={(e) => setTaskTitle(e.target.value)}
        type="text"
        value={taskTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add Task
      </button>
    </form>
  );
};
