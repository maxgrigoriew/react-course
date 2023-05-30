import React from 'react'

export default function Button({children, className, ...props}) {
  return (
    <button {...props} className={`btn btn-success ${className}`}>{children}</button>
  )
}
