import { useMemo, useState } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Button from './components/UI/Button';
import { CSSTransition } from 'react-transition-group'


function App() {
  const [posts, setPosts] = useState([
    { id: 2, title: 'PhP', body: 'backend' },
    { id: 1, title: 'Javascript', body: 'frontend' },
    { id: 3, title: 'Ruby', body: 'backend' },
  ])
  const [filter, setFilter] = useState({search: '', sort: ''})
  const [modal, setModal] = useState(false)

  const options = [
    {
      name: 'Название',
      value: 'title',
    },
    {
      name: 'Описание',
      value: 'body',
    }
  ]

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) 
    }
    return posts
  }, [posts, filter.sort])

  const filtredAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.search.toLowerCase()))
  }, [filter.search, sortedPosts])

  const openModal = () => {
    setModal(true)
  }
  return (
    <div className='container pt-5'>
      <Navbar/>
      <div>
        <div>
          <CSSTransition in={modal} timeout={500} classNames='my-node' unmountOnExit>
            <Modal setVisible={setModal} visible={modal}>
              <PostForm create={createPost}/>
            </Modal>
          </CSSTransition>
        </div>
    </div>
      <Button onClick={openModal}>Добавить пост</Button>
  
   

     <hr />

     <PostFilter 
      options={options} 
      filter={filter}
      setFilter={setFilter}/>

     <PostList 
      posts={filtredAndSortedPosts} 
      remove={removePost} 
      title={"Список постов!"}/>
    </div>

  );
}

export default App;
