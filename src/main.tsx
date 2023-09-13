import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IntlProvider } from "react-intl";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={"es-AR"} defaultLocale="es-AR" >
    <App />
    </IntlProvider>
  </React.StrictMode>,
)
