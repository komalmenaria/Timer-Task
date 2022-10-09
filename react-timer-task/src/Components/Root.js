import React from 'react';
import Timer from './Timer';
import Task from './Task'
import { useNavigate } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";

function Root() {
  const navigation = useNavigate();

  function handleTimer(){
    navigation('/')
  }
  function handleTask(){
    navigation('/task')
  }

  return (
   <div className="container">
   
    <div className="d-flex justify-content-center">
    <button type="button" onClick={handleTimer} className="btn btn-dark btn-lg m-3 px-4">Timer</button>
    <button type="button" onClick={handleTask} className="btn btn-dark btn-lg m-3 px-4">Task</button>
    </div>
   
      <Routes>
        <Route path="/" element={ <Timer />} />  
        <Route path="/task" element={ <Task />} />  

      </Routes>
   </div>
  );
}

export default Root;
