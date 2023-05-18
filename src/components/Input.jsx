import React, { useState } from 'react'

export default function Input(props) {

  const [input, setInput] = useState('')

  const changeINput = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
      <h1>{input}</h1>
      <input className='w-100 p-3' type="text" onChange={changeINput} />
    </div>
  )
}
