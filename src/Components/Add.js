import React, { useState } from "react";
import {useDispatch}from "react-redux";
import {addTask} from '../Redux/action'

const Add = () => {
  const [newTask,setNewTask]=useState({})

  const dispatch = useDispatch();

  const submitTask=(e)=>{
  e.preventDefault();
    if (newTask.description !=='')
  {
      dispatch(addTask(newTask));
     
     setNewTask({
     
      description:""
     })
  
  }
  else {
    alert("put a right description!");
  }

 
    }
    const handleChange=(e)=>{
    e.preventDefault();
      setNewTask({
        ...newTask,
        description: e.target.value,
        id:Math.random(),
        isDone:false
      });
    
    };
    
  return (
    <div>
      <form>
        <div className="add" >
        <input  id="myInput" type="text" name="description" onChange={handleChange} placeholder="write your description" value={newTask.description|| ''}/>
      <button className="addBtn" onClick={submitTask}><i  aria-hidden="true"></i> Ok</button>
      </div>
      </form>
    </div>
  )
}

export default Add