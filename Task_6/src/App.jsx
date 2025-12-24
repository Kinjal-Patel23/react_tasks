import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogList from './components/BlogList'
import BlogPage from './pages/BlogPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BlogList/>}/>
          <Route path='/blog/:id' element={<BlogPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
