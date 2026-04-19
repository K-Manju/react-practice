import { useState } from "react"

const Card = ({title}) => {

  const[hasLiked, setHasLiked] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>{hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => { 

  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="Titanic" />
    </div>

  )
}

export default App
