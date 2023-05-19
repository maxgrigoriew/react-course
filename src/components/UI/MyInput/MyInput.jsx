import React from 'react'

export default function MyInput({ ...props }) {
  return (
    <div>
      <input
        className="w-100 mb-3 p-3"
        type="text"
        {...props} />
    </div>

  )
}
