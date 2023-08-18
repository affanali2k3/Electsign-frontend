import React from 'react'
import { useState, useEffect } from 'react';
import { auth } from '../../../firebase';
import axios from 'axios';
import { FileViewer } from '../FileViewer/FileViewer';
import { Link } from 'react-router-dom';

export const ViewSharedDocuments = () => {
  const [fileNames, setFileNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseFileNames = await axios.get(`http://localhost:8080/api/v1/shareDocument/sharedDocumentsNames/${auth.currentUser?.email}`);
        const responseFileNamesData = responseFileNames.data.data;

        setFileNames(responseFileNamesData); // Store the API response in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when the component mounts

  }, []); // Empty dependency array means this effect runs only once, on mount

  useEffect(() => {
    // This effect will run whenever fileNames changes
    if (fileNames) {
      const fetchAllDocuments = async () => {
        for (const fileName of fileNames) {
          await fetchDocument(fileName);
        }
      };

      fetchAllDocuments();
    }
  }, [fileNames]); // This effect depends on the fileNames array

  const fetchDocument = async (fileName) => {
    try {
      const url = `http://localhost:8080/api/v1/shareDocument/sharedDocuments/${auth.currentUser.email}/${fileName}`;
      const response = await axios.get(url);


      // setDocuments(prevDocuments => [...prevDocuments, data]);
    } catch (error) {
      console.error(`Error fetching document `, error);
    }
  };


  return (
    <div>
      <h1>ViewSharedDocuments</h1>
      {fileNames.length > 0 ? (
        fileNames.map((file, index) => (
          <Link
            to='/file-viewer'
            state={{ url: `http://localhost:8080/api/v1/shareDocument/sharedDocuments/${auth.currentUser.email}/${file}` }}
            key={index}
          >
            <button>{file}</button>
          </Link>

        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};



