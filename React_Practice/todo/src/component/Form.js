import React from 'react'
import {useState} from 'react'



const Form = ({addTask}) => {
const[task, setTask]= useState('')
const[day, setDay]= useState('')
const[reminder, setReminder]= useState(false)

const onSubmit=(e)=>{
    console.log("submit")
    e.preventDefault()

    if(!task){
        alert("Please add task");
        return
    }

  
    addTask({ task, day, reminder })

    setTask('')
    setDay('')
    setReminder(false)
}

  return (
      <form onSubmit={onSubmit}>
          <div>          
            <label>Task</label>
            <input type='text'
            placeholder='Add Task'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            />
            <br/><br/>

            <label>Day and Time</label>
            <input type='text'
             placeholder='Add Day andTime'
             value={day}
             onChange={(e)=>setDay(e.target.value)}
             /><br/><br/>

            <label>Set Reminder</label>
            <input type='checkbox'
             value={reminder}
             checked={reminder}
             onChange={(e)=>setReminder(e.currentTarget.checked)}
             />
            </div><br/><br/>
            <input type='submit' value='Save Task' />

      </form>
    )
}

export default Form
