import React from 'react';
import axios from 'axios';

export const FileUpload = ({ onFileUpload, selectedFile }) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileUpload(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const userId = '1122911_alit';

        await axios.post(`http://localhost:8080/userDocUploadDB/${userId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        alert('File uploaded successfully!');
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('An error occurred while uploading the file.');
      }
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

