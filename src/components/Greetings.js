import React, { useState } from 'react'

const Greetings = () => {
    const[name, setName] = useState('')
  return (
    <div>
      <label htmlFor='name'>Enter Your Name:</label><br/>
      <input id='name' type="text" onChange={(e) => {
        let greet= e.target.value ? "Hello " + e.target.value +"!" : "";
        setName(greet)

      }} />
      <div>{name}</div>
    </div>
  )
}

export default Greetings
