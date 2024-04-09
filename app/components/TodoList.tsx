import React from "react";

export const TodoList = () => {
  return (
    <ul className="space-y-3">
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span className="text-gray-700">Task 1</span>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </li>
      <li className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
        <span className="text-gray-700">Task 2</span>
        <button className="text-red-500 hover:text-red-700">Remove</button>
      </li>
    </ul>
  );
};
