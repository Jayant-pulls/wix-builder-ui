import React, { useState } from "react";

export default function HeaderEditor() {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleSave = () => {
    console.log("Saved Header Settings:", {
      showPhone,
      showEmail,
      showLocation,
      showSocial,
      showCart,
    });
  };

  const renderToggle = (label, checked, onChange) => (
    <div className="flex justify-between items-center p-4 border rounded shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100">
      <span className="font-medium">{label}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:bg-blue-600 dark:bg-gray-600 dark:peer-checked:bg-blue-500 transition-all"></div>
        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 dark:bg-gray-100"></span>
      </label>
    </div>
  );

  return (
    <div className="space-y-4 max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow-md">
      {renderToggle("Show Phone Numbers", showPhone, () => setShowPhone(!showPhone))}
      {renderToggle("Show Email", showEmail, () => setShowEmail(!showEmail))}
      {renderToggle("Show Location Address", showLocation, () => setShowLocation(!showLocation))}
      {renderToggle("Show Social Networks", showSocial, () => setShowSocial(!showSocial))}
      {renderToggle("Show Shopping Cart Tool", showCart, () => setShowCart(!showCart))}

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
      >
        Save Header Settings
      </button>
    </div>
  );
}
