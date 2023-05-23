import { useMemo, useState, useEffect } from 'react';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Button from './components/UI/Button';
import { CSSTransition } from 'react-transition-group'
import { usePosts } from './hooks/usePosts';
import PostsService from './api/postService';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({search: '', sort: ''})
  const [modal, setModal] = useState(false)
  
  const filtredAndSortedPosts = usePosts(posts, filter.sort, filter.search ) 

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
  
  const openModal = () => {
    setModal(true)
  }
  
  const fetchPosts = async () => {
   const posts = await PostsService.getAll()
   console.log(posts);
   
   setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className='container pt-5'>
      <Navbar/>
      <div>
        <div>
          <CSSTransition in={modal} timeout={500} classNames='form-modal' unmountOnExit>
            <Modal setVisible={setModal} visible={modal}>
              <PostForm create={createPost}/>
            </Modal>
          </CSSTransition>
        </div>
    </div>
      <Button onClick={openModal}>Добавить пост</Button>

     <PostFilter 
      options={options} 
      filter={filter}
      setFilter={setFilter}/>
    {posts.length > 0 && (
      <PostList 
      posts={filtredAndSortedPosts} 
      remove={removePost} 
      title={"Список постов!"}/>
    )}
    
    </div>

  );
}

export default App;
