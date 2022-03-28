import PropTypes from 'prop-types'

import React from 'react'

export  function Button({name,color,taskButton}) {

    

  return (
    <div>
        <button style={{backgroundColor:color}} onClick={taskButton}>{name}</button>
    </div>
  )
}


Button.dafaultProps = {
    color:'blue',
}

Button.propTypes ={
    text : PropTypes.string,
    color : PropTypes.string,
    onClick: PropTypes.func,
}


export default Button;
