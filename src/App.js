import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'frontend' },
    { id: 2, title: 'PhP', body: 'backend' },
    { id: 3, title: 'Ruby', body: 'backend' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
  // debugger    
    setPosts(posts.filter((p) => p.id !== post.id))
  }
 
  return (
    <div className='container pt-5'>
      <Navbar/>
     <PostForm create={createPost}/>
     <PostList posts={posts} remove={removePost} title={"Список постов!"}/>
    </div>

  );
}

export default App;
