import { useMemo, useState, useEffect } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Modal from './components/Modal'
import PostFilter from './components/PostFilter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import Select from './components/Select'
import Button from './components/Button'
import { CSSTransition } from 'react-transition-group'
import { usePosts, useSortedPosts } from './hooks/usePosts'
import PostService from './api/PostService'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import Layout from './Layout'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {
            routes.map((item) =>
              <Route
                path={item.path}
                element={<item.component />}
                key={item.component} />
            )
          }
        </Routes>

      </Layout>
    </BrowserRouter>

  )
}

export default App
