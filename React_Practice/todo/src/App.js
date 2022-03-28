import logo from './logo.svg';
import './App.css';
import AddTask from './component/AddTask';
import Header from './component/Header';
import Tasks from './component/Tasks';
import Form from './component/Form';
import {useState} from 'react'



function App() {
  
const[tasks,setTasks] = useState([
    {id:1,task:"appointment",day:"Monday",reminder:false},
    {id:2,task:"assignment",day:"tuesday",reminder:false},
    {id:3,task:"travel",day:"sunday",reminder:false}
]) 
const[show , setShow] = useState(false)

//add Task
const addTask=(taskss)=>{
  console.log(taskss);
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id,...taskss}
  setTasks([...tasks,newTask])
}

//delete
const deleteTask=(id)=>{
  console.log("test delete",id)
  setTasks(tasks.filter((m)=>m.id!==id))
}

//reminder
const reminder =(id) =>{
  
  console.log("test reminder: " , id);
  setTasks(tasks.map((task) => task.id === id ? 
  {...task , reminder: !task.reminder} 
  : task ))
}
// reminder:switchBoolean(task.reminder)

// let switchBoolean = (value) =>{
//   if(value){
//     return false;
//   }

//   return true;
// }
//while mapping, if the id = id of selected task , copy the other properties and values(...n) but toggle the value of reminder , else all the tasks would be same

//toggle button
const taskButton = () => {
  setShow(!show)
}


  return (
    <div className="App" >
      <Header title='Task Tracker'  taskButton={taskButton} show={show} />
      {show? (<Form addTask={addTask}/>): ('')}

      {/* also correct, short form of ternary
            {show &&(<Form addTask={addTask}/>)}
    */}

      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask} reminder={reminder}/>) :('No tasks')}
      {/* {
        tasks.map((n) => {
            return <div>{n.task}</div>;
        })

      } */}
    </div>
  );
}

export default App;
