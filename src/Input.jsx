import React from 'react'

function Input(props) {
  //console.log("im list", props.list)
  return (
    <>
        <h1>Welcome</h1>
        <input 
            onChange={props.onchange}
            value={props.value}
        />
        <button onClick={props.addClick}> + </button>
    </>
  )
}

export default Input