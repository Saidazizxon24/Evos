
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemProvider from './context/ThemContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ThemProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemProvider>
  /* </StrictMode>, */
)
