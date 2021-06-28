import React from 'react'
import  {deleteTask,doneTask} from '../Redux/action';
import {useDispatch} from "react-redux";
import Edit from './Edit';

const Task = ({todo}) => {
    
    const dispatch = useDispatch();

    const handlesubmit =()=>{
        dispatch(deleteTask(todo.id));
    }
    const handleDone =()=>{
        dispatch(doneTask(todo.id));
        
    }
    return (
        <div className="list1">
     
              <p className={todo.isDone?'done':null}>
            {todo.description}</p>
            <Edit todo={todo}/>
      <button onClick={handlesubmit}>delete<i  aria-hidden="true"></i>
      </button>
            <button className={todo.isDone?'yes done':'no try egain'}   onClick={handleDone}>{todo.isDone?"it's ok" : "to do"}</button>

           
            
        
           
            </div>
    )
}

export default Task