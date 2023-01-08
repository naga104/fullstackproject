import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TourContext from './Componets/Context/TourContext';
import AuthContextProvider from './Componets/Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
    <TourContext>
      <App />
    </TourContext>
  </AuthContextProvider>

);

