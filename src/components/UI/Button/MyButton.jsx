import React from 'react'

export default function MyButton({children, ...props}) {

  return (
    <button
      className="btn btn-primary"
      {...props}
    >
      {children}</button>
  )
}
