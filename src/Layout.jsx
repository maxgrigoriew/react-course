import React from 'react'
import App from './App'
import Navbar from './components/Navbar'
export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<div className="container">
				{children}
			</div>
		</div>
	)
}
