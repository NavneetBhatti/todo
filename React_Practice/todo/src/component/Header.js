import React from 'react';
import Button from './Button';
import {useState} from 'react'

//props is just an object of whatever props u pass in, so we can destructure, so we can add curly braces and take in the tilte
// const Header = (props) => {
//     return (
//       <Header>
//           <h1>Hello .......{props.title}</h1>
//           {/* <h1 style={{color:'red',backgroundColor:'black'}}>Hello.. {title}</h1> */}
//           {/* another way of styling */}
//           {/* <h1 style={HeaderStyle}>Hello.. {title}</h1> */}


//       </Header>
//     )

const addForm = () => {
  console.log("----hello----")
}

const Header = ({title,taskButton,show}) => {

  return (
    <h1>
        <h1 style={HeaderStyle}>{title}</h1>
        {/* {show?(<Button name="Cancel" color="red" taskButton={taskButton}/>):(<Button name="Add task" color="green" taskButton={taskButton}/>)} */}
        <Button 
        name={show?('Cancel'):('Add Task')}
        color={show?('red'):('green')} 
        taskButton={taskButton}/>
    </h1>
  )

  


//can add deafut props but if pass in app.js then that will overwrite default

//   Header.defaultProps ={
//       title : 'task tracker'
//   }
}

const HeaderStyle = {color:'red',backgroundColor:'black'}

export default Header;



//see prop types 30.21