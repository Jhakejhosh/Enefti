import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import AppProvider from "./context/Context"
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider> 
  </React.StrictMode>,
)
