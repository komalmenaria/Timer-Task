import React from 'react';
import './App.css';
import Root from './Components/Root';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Root />
    </BrowserRouter>
    </>
  );
}

export default App;
