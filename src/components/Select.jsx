import React from 'react'

export default function Select({value, onChange, options}) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className='form-control mb-3'>
        <option value="" disabled>Сортировка по:</option>
        {
          options.map((option) => {
            return <option value={option.value} key={option.value}>{option.name}</option>
          })
        }
        
    </select>
  )
}