import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/ThemeContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartContextProvider>


    <ThemeContextProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </ThemeContextProvider>
  </CartContextProvider>
)
