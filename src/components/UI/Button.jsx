import React from 'react'

export default function Button({children = 'Добавить', ...props}) {
  return (
    <button className='btn btn-success' {...props}>{children}</button>
  )
}
