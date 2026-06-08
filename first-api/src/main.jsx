import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Produkty from './Produkty'
import Users from './Users'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Produkty />
    <Users />
  </StrictMode>,
)
