import React, { useEffect } from 'react'
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Users from './components/Users'

const App = () => {
  useEffect(() => {
    console.log('App started!')
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}

export default App
