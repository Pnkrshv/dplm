import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import CreateOpros from './components/CreateOpros'
import PublicOpros from './components/PublicOpros'
import Library from './assets/Library'
import Help from './components/Help'
import Analysis from './components/Analysis'

function App() {

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<CreateOpros />} />
          <Route path='/publication' element={<PublicOpros />} />
          <Route path='/library' element={<Library />} />
          <Route path='/analysis' element={<Analysis />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
