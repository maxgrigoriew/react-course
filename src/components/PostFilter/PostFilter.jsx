import React from 'react'
import MyInput from '../UI/MyInput/MyInput'
import MySelect from '../UI/MySelect/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
      <MyInput
        onChange={e => setFilter({...filter, query: e.target.value})}
        value={filter.query}
        placeholder='Поиск' />
      <MySelect
        value={filter.sort}
        onChange={(filterSort) => setFilter({...filter, sort: filterSort})}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]} />
    </div>
  )
}
