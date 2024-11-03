import React, { useState } from 'react';

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose }) => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(event.target.files);
      // Handle file upload logic here
      console.log(event.target.files);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files) {
      setFiles(event.dataTransfer.files);
      // Handle file upload logic here
      console.log(event.dataTransfer.files);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-xl mb-4">Upload Data</h2>
        <div
          className="border-2 border-dashed border-blue-500 p-4 rounded-lg mb-4"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Drag and drop files here or
          <input type="file" onChange={handleFileUpload} className="hidden" id="fileInput" />
          <label htmlFor="fileInput" className="text-blue-500 cursor-pointer ml-2">select files</label>
        </div>
        <div className="flex justify-around">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Continue
          </button>
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
