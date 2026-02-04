import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Polyfill para window.storage (localStorage wrapper)
if (!window.storage) {
  window.storage = {
    get: async (key) => {
      const value = localStorage.getItem(key)
      return value ? { value } : null
    },
    set: async (key, value) => {
      localStorage.setItem(key, value)
    },
    remove: async (key) => {
      localStorage.removeItem(key)
    }
  }
}

// Registrar Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/acervo_digital_pessoal/sw.js')
      .catch(() => {
        // PWA service worker will be registered by vite-plugin-pwa
      })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
