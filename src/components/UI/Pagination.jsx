import React from 'react'

export default function Pagination({pages = []}) {
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => 
          <li className="page-item">
            <a className="btn btn-success" href="#">{page + 1}</a>
          </li>
        )}
      </ul>
    </nav>
  )
}
