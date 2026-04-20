import React, { useState } from 'react'

const Toggler = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div style={{
        backgroundColor: toggle ? "black" : "white",
        height: "100px",
        color: toggle ? "white" : "black",
      }}>
      <button onClick={()=> setToggle(!toggle)}>{toggle ? "Light" : "Dark"}</button>
    </div>
  )
}

export default Toggler
