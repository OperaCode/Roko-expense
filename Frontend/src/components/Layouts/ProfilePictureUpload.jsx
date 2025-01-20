import React, { useState } from "react";
import axios from "axios";

const ProfilePictureUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file)); // Preview image before upload
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("No file selected!");

    const formData = new FormData();
    formData.append("profilePicture", selectedFile);

    try {
      await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Upload successful!");
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Upload Profile Picture</h2>
      <div className="flex flex-col items-center">
        {/* File Input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />

        {/* Preview */}
        {previewUrl && (
          <div className="mt-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 rounded-full border-2 border-indigo-500 shadow-lg"
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ProfilePictureUpload;
