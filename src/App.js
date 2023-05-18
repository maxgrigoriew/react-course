import { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description 1' },
    { id: 2, title: 'PhP', body: 'Description 2' },
    { id: 3, title: 'Ruby', body: 'Description 3' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className='container pt-5'>
      <PostForm
        create={createPost} />
      <PostsList
        posts={posts}
        title='Это список постов'
        remove={removePost} />
    </div >

  );
}

export default App;
