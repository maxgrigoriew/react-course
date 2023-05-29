import { useMemo, useState } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Modal from './components/Modal'
import PostFilter from './components/PostFilter'
import PostItem from './components/PostItem'
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

  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modal, setModal] = useState(false)

  const addPost = (post) => {
    setPosts([...posts, post])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const sortedPosts = useMemo(() => {
    return filter.sort
      ? [...posts].sort((a, b) => {
        if (a[filter.sort] < b[filter.sort]) {
          return -1
        }
      })
      : posts
  }, [posts, filter.sort])

  const searchedAndSortedPosts = useMemo(() => {
    if (filter.search) {
      return [...sortedPosts].filter((p) =>
        p.title.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase())
        || p.body.toLocaleLowerCase().includes(filter.search.toLocaleLowerCase()))
    }
    return sortedPosts
  }, [filter.search, filter.sort])

  return (
    <div className="container pt-5">
      <Modal visible={modal} setVisible={setModal}>
        <Form add={addPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={searchedAndSortedPosts} />
      <PostList searchedAndSorted posts={posts} remove={removePost} />
    </div>
  )
}

export default App