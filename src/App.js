import { useMemo, useState } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import PostList from './components/PostList'
import Select from './components/Select'

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
      title: 'Js',
      body: 'Описание 3',
      id: 3
    }
  ])

  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const addPost = post => {
    setPosts([...posts, post])
  }

  const sortedPosts = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => {
        if (a[sort] > b[sort]) {
          return -1
        }
      })
      : posts
  }, [posts, sort])

  const filtredPosts = useMemo(() => {
    return search
      ? [...sortedPosts].filter(post => post.title.includes(search))
      : sortedPosts
  }, [search, sortedPosts])

  return (
    <div className="container pt-5">
      <Form add={addPost} />
      <div>{sort}</div>
      <Input value={search} onChange={e => setSearch(e.target.value)} />

      <Select value={sort} onChange={post => setSort(post)} />

      <PostList
        posts={filtredPosts}
        title={'Это список постов'}
        remove={removePost}
      />
    </div>
  )
}

export default App
