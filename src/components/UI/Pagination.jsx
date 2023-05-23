import React, {useState} from 'react'
import { getArrayPages } from '../../utils/pages'

export default function Pagination({totalPages, page, changePage}) {
  const arrayPages = getArrayPages(totalPages)
  
  return (
    <nav>
      <ul className="pagination">
        {arrayPages.map((p) => 
          <li className="page-item m-1" key={p}>
            <a className={page === p 
              ? "btn page__current" 
              : "btn btn-success "} 
              onClick={ () => changePage(p)}
              >{p}
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}
