import React from 'react'
import { useState } from 'react'
import { FileUpload } from '../components/components/uploadBox'
import { ShareDocument } from '../components/components/ShareDocument/ShareDocument'
import { Link } from 'react-router-dom'

const Home = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Home Page</h1>
      <FileUpload onFileUpload={handleFileUpload} selectedFile={uploadedFile} />
      <ShareDocument selectedFile={uploadedFile} />
      <Link to='/view-shared-documents'><button>View shared documents</button></Link>
    </div>
  )
}

export default Home