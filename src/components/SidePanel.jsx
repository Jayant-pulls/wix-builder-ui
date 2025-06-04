import React from "react";

export default function SidePanel({ title, onClose, children }) {
  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 flex flex-col">
      <div className="flex justify-between items-center px-4 py-3 border-b flex-shrink-0">
        <h2 className="font-semibold text-lg">{title}</h2>
        <button onClick={onClose} className="text-gray-600 hover:text-red-500">
          ✕
        </button>
      </div>
      <div className="p-4 overflow-y-auto flex-1">
        {children}
      </div>
    </div>
  );
}
