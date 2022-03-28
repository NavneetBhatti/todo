import React from "react"
import { FaTimes } from 'react-icons/fa'
// import ./App.css 


const AddTask = ({addTask,onDelete,reminder}) => {
    return(
//    <div className='task' onDoubleClick={reminder}  >
//make the task class a expression, that would be still there, then there is condition that if the reminder is true then have the class of reminder else nothing
<div className={`task ${addTask.reminder ? 'reminder': ''} `} onDoubleClick={()=>reminder(addTask.id)}  >

        <h3>{addTask.task}<FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(addTask.id)}/></h3>
        <p>{addTask.day}</p>
   </div>
    )
}


export default AddTask



//npm i react-icons