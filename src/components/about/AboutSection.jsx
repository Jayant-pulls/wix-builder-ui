import React, { useState } from 'react';
import AboutEditorPanel from './AboutEditorPanel';

const AboutSection = () => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [aboutContent, setAboutContent] = useState("This is a default about section. Click 'Edit About' to change it.");

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">About</h2>
        <button
          onClick={() => setIsEditorOpen(true)}
          className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Edit About
        </button>
      </div>

      <p className="mt-2 text-gray-700 whitespace-pre-wrap">{aboutContent}</p>

      {isEditorOpen && (
        <AboutEditorPanel
          content={aboutContent}
          onClose={() => setIsEditorOpen(false)}
          onSave={(newContent) => setAboutContent(newContent)}
        />
      )}
    </div>
  );
};

export default AboutSection;
