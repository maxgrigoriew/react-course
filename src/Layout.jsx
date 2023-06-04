import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
export default function Layout({ children }) {
	return (
		<div className='container'>
			<Header />
			{children}
		</div>
	)
}
