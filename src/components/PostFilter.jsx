import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

export default function PostFilter({filter, setFilter}) {


  return (
    <div>
      <Input
        value={filter.search}
        onChange={e => setFilter({...filter, search: e.target.value})}
        placeholder="Поиск..."
      />
      <Select
        value={filter.sort}
        onChange={post => setFilter({...filter, sort: post})}
        options={[
          { value: 'title', name: 'Название' },
          { value: 'body', name: 'Описание' }
        ]}
      />
    </div>
  )
}
