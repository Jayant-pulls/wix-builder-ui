import React, { useState } from "react";

export default function FooterEditor() {
  const [footerText, setFooterText] = useState("© 2025 My Website");
  const [showContact, setShowContact] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showMailingList, setShowMailingList] = useState(false);
  const [showPopups, setShowPopups] = useState(false);

  const handleSave = () => {
    console.log("Saved Footer Settings:", {
      footerText,
      showContact,
      showShare,
      showSocial,
      showMailingList,
      showPopups,
    });
  };

  const renderToggle = (label, checked, onChange, extra = null) => (
    <div className="flex justify-between items-center p-4 border rounded shadow-sm bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100">
      <div>
        <span className="font-medium">{label}</span>
        {extra && <div className="text-xs mt-1">{extra}</div>}
      </div>
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
      <div>
        <label className="block font-medium mb-1 text-gray-900 dark:text-gray-100">
          Footer Text
        </label>
        <input
          type="text"
          value={footerText}
          onChange={(e) => setFooterText(e.target.value)}
          className="w-full p-2 border rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
        />
      </div>

      {renderToggle("Floating Contact Button", showContact, () => setShowContact(!showContact))}
      {renderToggle("Floating Share Button", showShare, () => setShowShare(!showShare))}
      {renderToggle("Show Social Networks", showSocial, () => setShowSocial(!showSocial))}
      {renderToggle(
        "Show Mailing List",
        showMailingList,
        () => setShowMailingList(!showMailingList),
        <span className="text-orange-600 dark:text-orange-400 font-semibold">+GET FEATURE</span>
      )}
      {renderToggle("Promotion Popups", showPopups, () => setShowPopups(!showPopups))}

      <button
        onClick={handleSave}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
      >
        Save Footer
      </button>
    </div>
  );
}
