import React from "react";

export const AddTask = () => {
  return (
    <form className="mb-4 space-y-3">
      <input
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
        type="text"
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95">
        Add Task
      </button>
    </form>
  );
};
