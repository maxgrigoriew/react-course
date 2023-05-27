import React from 'react'

export default function Select({value, onChange}) {

  return (
    <select className='form-select' value={value} onChange={ e => onChange(e.target.value)}>
    <option disabled>
      Сортировка по:
    </option>
    <option value="title">Название</option>
    <option value="body">Описание</option>
  </select>
  )
}
