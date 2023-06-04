import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Posts from './pages/Posts'
import { routes } from './router'

export default function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}
