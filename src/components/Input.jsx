import React from 'react'

export default function Input({value, onChange, placeholder}) {
  return (
    <input type="text" className='form-control mb-4' value={value} onChange={onChange} placeholder={placeholder}/>
  )
}
