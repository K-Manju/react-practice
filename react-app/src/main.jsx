import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Toggler from './Toggler.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter />
    <Toggler/>
  </StrictMode>,
)
