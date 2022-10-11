import React,{useState,useEffect} from 'react';
import Timer from './Timer';
import Task from './Task'
import { useNavigate } from 'react-router-dom';
import {
  Routes,
  Route,
} from "react-router-dom";

function Root() {
  const [list, setlist] = useState([]);
  const navigation = useNavigate();

  function handleTimer(){
    navigation('/')
  }
  function handleTask(){
    navigation('/task')
  }
  const updateList=(arr)=>{
    setlist(arr)
    localStorage.setItem('list',JSON.stringify(arr));
  }
  useEffect(() => {
  let data=localStorage.getItem('list')
  if(data){
    setlist(JSON.parse(data))
  }
  }, []);
// funtion for update in localstorege
//function for fetch frist time from localstorege

  return (
   <div className="container">
   
    <div className="d-flex justify-content-center">
    <button type="button" onClick={handleTimer} className="btn btn-dark btn-lg m-3 px-4">Timer</button>
    <button type="button" onClick={handleTask} className="btn btn-dark btn-lg m-3 px-4">Task</button>
    </div>
   
      <Routes>
        <Route path="/" element={ <Timer list={list} updateList={updateList} />} />  
        <Route path="/task" element={ <Task list={list} updateList={updateList} />} />  

      </Routes>
   </div>
  );
}

export default Root;
