import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Calculate from './Components/Calculate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculate />
  </StrictMode>
)
