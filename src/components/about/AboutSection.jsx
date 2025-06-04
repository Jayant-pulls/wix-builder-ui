import React, { useState } from 'react';

export default function AboutSection() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-6 my-8 bg-white rounded shadow">
      <button
        onClick={() => setShowContent(!showContent)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
      >
        About
      </button>

      {showContent && (
        <div className="mt-4 text-gray-700">
          <h2 className="text-2xl font-semibold mb-2">About Our Website</h2>
          <p>
            Welcome to our website! We provide the best solutions to help you build amazing projects
            with ease. Our platform is designed with user experience and customization in mind.
          </p>
        </div>
      )}
    </div>
  );
}
