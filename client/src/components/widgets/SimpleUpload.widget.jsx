import React, { useState } from 'react';

export default function SimpleUpload({ user }) {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) return alert('No file selected');
    console.log('Uploading file:', file.name);
    // Add actual upload logic
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-2">Upload Document</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="text-black p-1 rounded"
      />
      <button
        onClick={handleUpload}
        className="mt-2 bg-lime-500 px-4 py-2 rounded text-black"
      >
        Upload
      </button>
    </div>
  );
}
