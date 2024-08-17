// import React,{ useState } from 'react'
import Login from '../src/Component/Authentication/Login'
import Signup from './Component/Authentication/Signup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import Home from './Component/Home/Home';
// import { Link } from 'react-router-dom';

function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </Router>
  )
}

export default App
