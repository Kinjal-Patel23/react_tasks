import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ROUTES from './navigation/routes'
import BlogList from './components/BlogList'
import BlogPage from './pages/BlogPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<BlogList />} />
          <Route path={ROUTES.BLOG_DETAIL} element={<BlogPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
