import { useMemo, useState, useEffect } from 'react'
import Form from './components/Form'
import Input from './components/Input'
import Modal from './components/Modal'
import PostFilter from './components/PostFilter'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import Select from './components/Select'
import Button from './components/Button'
import { CSSTransition } from 'react-transition-group'
import { usePosts } from './hooks/usePosts'
import PostService from './api/PostService'

function App() {
  const [posts, setPosts] = useState([])

  const [filter, setFilter] = useState({ sort: '', search: '' })
  const [modal, setModal] = useState(false)
  const searchedAndSortedPosts = usePosts(posts, filter.sort, filter.search)

  const addPost = post => {
    setPosts([...posts, post])
    setModal(false)
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const fetchPosts = async () => {
    const response = await PostService.getPosts()
    setPosts(response)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container pt-5">
      <Button onClick={() => setModal(true)} className="mb-3">
        Добавить пост
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <Form add={addPost} />
      </Modal>
      <div>{filter.search}</div>
      <PostFilter filter={filter} setFilter={search => setFilter(search)} />
      <PostList
        searchedAndSorted
        posts={searchedAndSortedPosts}
        remove={removePost}
      />
    </div>
  )
}

export default App
