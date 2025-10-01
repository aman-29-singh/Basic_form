import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter ,Route, Routes } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Card from './components/Card'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App/>}/>
      <Route path="/header" element={<Header/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/card" element={<Card/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
