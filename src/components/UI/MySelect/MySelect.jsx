import React from 'react'

export default function MySelect({ options, value, onChange, defaultValue = 'Сортировка по:' }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}>
      <option disabled >{defaultValue}</option>
      {
        options.map((option) =>
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        )
      }
    </select >
  )
}
