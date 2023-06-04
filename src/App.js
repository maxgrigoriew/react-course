import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import Posts from './pages/Posts'
import { routes } from './router'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
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
      </div>
    </>
  )
}
