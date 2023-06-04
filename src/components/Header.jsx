import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-white">
			<div class="container-fluid">
				<button
					class="navbar-toggler"
					type="button"
					data-mdb-toggle="collapse"
					data-mdb-target="#navbarExample01"
					aria-controls="navbarExample01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarExample01">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">

						<li class="nav-item">
							<Link class="nav-link" to={'/'}>Главная</Link>
						</li>
						<li class="nav-item">
							<Link class="nav-link" to={'/posts'}>Посты</Link>
						</li>

					</ul>
				</div>
			</div>
		</nav>
	)
}
