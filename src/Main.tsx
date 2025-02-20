import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App/App'

import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
