import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  Main  from './pages/Main'
import Posts from './pages/Posts'

export default function App() {
  return (
    <Routes>  
      <Route path="/" element={ <Main/> }/>
      <Route path="/posts" element={ <Posts/> }/>
    </Routes>
  )
}
