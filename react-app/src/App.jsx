import React, { useState } from 'react'

const Show = () =>{

  const [show, SetShow]=useState(false);

  return(
    <div>
      <button onClick={() => SetShow(!show)}>{show ? "Hide Text" : "Show Text"}</button>

      {show && <h2>Hello</h2>}
    </div>
  )
}

const App = () => {
  return (
    <div>
       <Show/>
    </div>
  )
}

export default App
