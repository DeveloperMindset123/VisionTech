import React from 'react';

interface UploadModalProps {
  onClose: () => void;
}

const UploadModal: React.FC<UploadModalProps> = ({ onClose }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-xl mb-4">Upload Data</h2>
        <div className="border-2 border-dashed border-blue-500 p-4 rounded-lg mb-4">
          Drag and drop files here or
          <input type="file" onChange={handleFileUpload} className="hidden" />
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