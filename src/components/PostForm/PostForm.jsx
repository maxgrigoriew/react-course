import React, { useState } from 'react'
import MyButton from '../UI/Button/MyButton'
import MyInput from '../UI/MyInput/MyInput'

export default function PostForm({create}) {

  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  
  function addNewPost(e) {
    e.preventDefault()

    if (!post.title || !post.body) {
      return
    }

    const newPost = {
      ...post, 
      id: Date.now()
    }

    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form className="form">
      <MyInput value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <MyInput value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
      <MyButton onClick={addNewPost}>Добавить</MyButton>
    </form>
  )
}
