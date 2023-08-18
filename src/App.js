import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import { ViewSharedDocuments } from './components/components/ViewSharedDocuments/ViewSharedDocuments';
import { FileViewer } from './components/components/FileViewer/FileViewer';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path="/file-viewer" element={<FileViewer></FileViewer>} />

          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path='/home'
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path='/view-shared-documents'
            element={
              <Protected>
                <ViewSharedDocuments />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
