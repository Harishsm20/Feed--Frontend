// import React,{ useState } from 'react'
import Login from '../src/Component/Authentication/Login'
import Signup from './Component/Authentication/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
// import { Link } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  )
}

export default App
