import React from 'react'
import { createRoot } from 'react-dom/client'
import Routers from './components/Routers'
import './layout.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>
)
