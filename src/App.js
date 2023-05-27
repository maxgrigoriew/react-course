import { useMemo, useState } from "react"
import Form from './components/Form'
import Input from "./components/Input"
import PostList from './components/PostList'

function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Ruby', 
      body: 'Описание 1',
      id: 1
    },
    {
      title: 'Pyton', 
      body: 'Описание 2',
      id: 2
    },
    {
      title: 'PHP', 
      body: 'Описание 3',
      id: 3
    }
  ])

  const [input, setInput] = useState("")

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const addPost = (post) => {
    setPosts([...posts, post])
  }
  return (
    <div className="container pt-5">
      <Form add={addPost}/>
      <PostList posts={posts} title={"Это список постов"} remove={removePost}/>
    </div>
  )
}

export default App
