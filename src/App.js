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
import Loader from './components/UI/Loader';
import { useFetching } from './hooks/useFetching';
import { getArrayPages, getPegeCount } from './utils/pages';
import Pagination from './components/UI/Pagination';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({search: '', sort: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const arrayPages = getArrayPages(totalPages)

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostsService.getAll(10, 1)
    setPosts(response.data)
    setTotalPages(response.headers['x-total-count'])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPegeCount(totalCount, limit))
  })
 
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

  useEffect(() => {
    fetchPosts()
    console.log(arrayPages);
    
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
      {
        postsError && <div>{postsError}</div>
      }
      {!isPostsLoading 
        ? <PostList 
            posts={filtredAndSortedPosts} 
            remove={removePost} 
            title={"Список постов!"}/>
            : <Loader/>
            
          }
      <Pagination pages={arrayPages}/>
    </div>

  );
}

export default App;
