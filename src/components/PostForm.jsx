import React, { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'

export default function PostForm({create, title}) {
  const [post, setPost] = useState({
    title: '',
    body: '',
  })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      ...post,
    }
    
    if (!newPost.body || !newPost.title) {
      return 
    }
    
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
    <form>
        <Input
          value={post.title}
          type="text"
          placeholder='Название поста'
          onChange={e => setPost({...post, title: e.target.value})}
          />

        <Input
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder='Описание поста'/>
        <Button onClick={ e => addNewPost(e)}>Добавить</Button>
      </form>
  )
}
