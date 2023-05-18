import React from 'react'

export default function MyInput({ ...props }) {
  return (
    <div>
      <p>{props.title}</p>
      <input {...props} className="w-100 mb-3 p-3" type="text" placeholder="Название поста" />
    </div>

  )
}
