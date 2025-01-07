import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import List from './pages/List';


function App() {

  return (
    <Router> 
    <>
      <Routes>
        <Route path='/' element = {<List/>}></Route>
      </Routes>
    </>
    </Router>
  )
}

export default App
