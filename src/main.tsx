import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IntlProvider } from "react-intl";

window.env = { baseUrl: import.meta.env.PROD ? "https://jcc.dcc.fceia.unr.edu.ar/2023/" : "http://localhost:5173/" }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={"es-AR"} defaultLocale="es-AR" >
    <App />
    </IntlProvider>
  </React.StrictMode>,
)
