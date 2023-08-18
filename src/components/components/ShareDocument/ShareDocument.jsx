import React, { useState } from 'react';
import { auth } from '../../../firebase';
import axios from 'axios';

export const ShareDocument = ({ selectedFile }) => {
    const [email, setEmail] = useState('')

    const shareDocumentSubmit = async () => {
        if (selectedFile) {
            try {
                const formData = new FormData();
                console.log('a');
                console.log(selectedFile);

                formData.append('receiverEmail', email);
                formData.append('senderEmail', auth.currentUser.email);
                formData.append('file', selectedFile);

                console.log('b');

                const response = await axios.post(`http://localhost:8080/api/v1/shareDocument`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });

                console.log(response);

                alert('File Shared successfully!');
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('An error occurred while sharing the file.');
            }
        } else {
            alert('Please select a file to upload.');
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={shareDocumentSubmit} >shareDocument</button>
        </div>
    );
};

