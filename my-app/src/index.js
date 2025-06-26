import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import About from './About'; // just short description 

//import UserHome from './UserHome'; // default home page and user page 
//import ownerHome from './OwnerHome';
//import editHome from './EditHome';

//import login from './LogIn'; 
//import signup from './SignUp';

//import option from './Option'; 

// Small part: 
// import roleChange from './RoleChange';
// import buildPlaylist from './BuildPlaylist'; 
// import songInfo from './SongInfo'; 
// import playlistInfo from './PlaylistInfo'; 




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
