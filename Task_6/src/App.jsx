import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import FirstBlog from './pages/FirstBlog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BlogList/>}/>
          <Route path='/blog/:id' element={<FirstBlog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
