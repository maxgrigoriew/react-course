import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Layout from './Layout'
import Main from './pages/Main'
import Posts from './pages/Posts'
import { routes } from './router'

export default function App() {
  return (
    <>
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
    </>
  )
}
