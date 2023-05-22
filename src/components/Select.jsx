import React from 'react'

export default function Select(props) {
  return (
    <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
      <option value="" disabled>Сортировка по:</option>
      {
        props.options.map((option) =>   
          <option value={option.value} key={option.value}>{option.name}</option>
        )
      }
    </select>
  )
}
