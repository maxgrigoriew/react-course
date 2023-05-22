import React, { useMemo, useState } from 'react'
import Select from './Select'
import Input from './UI/Input'

export default function PostFilter({filter, setFilter, options}) {

  return (
    <div>
      <Input value={filter.search} onChange={e => setFilter({...filter, search: e.target.value})}/>
     <Select
        value={filter.sort} 
        options={options}
        onChange={sort => setFilter({...filter, sort})}
        />
    </div>
  )
}
