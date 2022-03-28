import AddTask from './AddTask'


const Tasks = ({tasks,onDelete,reminder}) => {

   
  return (
    <div>
        {
            tasks.map((n)=>{
            //  return   <h3 key={n.id}>{n.task}</h3> 
                return  <AddTask key={n.id} addTask={n} onDelete={onDelete} reminder={reminder}/>
            })
        }
    </div>
  )
}

export default Tasks

{/* <h3 key={n.id}>{n.task}</h3> */}