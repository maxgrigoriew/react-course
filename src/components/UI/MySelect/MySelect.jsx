import React from 'react'

export default function MySelect({ options, selectValue, onChangeCallback, defaultValue = 'Сортировка по:' }) {
  return (
    <select
      value={selectValue}
      onChange={e => onChangeCallback(e.target.value)}>
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
