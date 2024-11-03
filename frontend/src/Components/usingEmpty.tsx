import React from 'react';

interface UploadEmptyProps {
  onUploadClick: () => void;
}

const UploadEmpty: React.FC<UploadEmptyProps> = ({ onUploadClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <p className="text-lg mb-4">Looks empty for now, add files to see your visualizations!</p>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={onUploadClick}
      >
        Upload Data
      </button>
    </div>
  );
};

export default UploadEmpty;