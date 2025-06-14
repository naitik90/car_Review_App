import React from 'react'
import Create from './components/Create'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Post from './components/Post';
import CarPost from './components/CarPost';
import About from './components/About';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post" element={<Post />} />
        <Route path="/:postId" element={<CarPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App