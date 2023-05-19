import React from 'react'

export default function MyButton({children= 'button', ...props}) {

  return (
    <button
      className="btn btn-primary"
      {...props}
    >
      {children}</button>
  )
}
