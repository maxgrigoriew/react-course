import React, {useState} from 'react'
import Button from './Button'
import Input from './Input'

export default function Form({add}) {
  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const addPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body,
    }
    if (!post.title || !post.body) return
    
    add(newPost)
    setPost({
      title: '',
      body: ''
    })
    
  }
  return (
    <form>
      <Input value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
      <Input value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
      <Button onClick={addPost}>Добавить пост</Button>
    </form>
  )
}
