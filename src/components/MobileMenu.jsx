import React from "react";

export default function MobileMenu({ items }) {
  return (
    <div className="md:hidden mt-2 space-y-2 px-2">
      {items.map((item) => (
        <button
          key={item}
          className="block w-full text-left hover:text-yellow-400"
        >
          {item}
        </button>
      ))}
    </div>
  );
}
