import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed

const AboutEditorPanel = ({ content, onClose, onSave }) => {
  const [text, setText] = useState(content);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    try {
      setSaving(true);

      // Replace with your backend endpoint
      const response = await axios.post('/api/save-about', { about: text });

      // Call the parent to update UI
      onSave(text);
      onClose();
    } catch (error) {
      alert("Failed to save: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-xl border-l z-50 p-4 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Edit About Section</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600">✕</button>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        className="w-full p-2 border border-gray-300 rounded resize-none"
        placeholder="Write something about your site..."
      />

      <button
        onClick={handleSave}
        disabled={saving}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default AboutEditorPanel;
