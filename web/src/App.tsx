import React from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/auth';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import './assets/styles/global.css';

function App() {
  return (
    <>
      <ToastContainer />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
