import { useMemo, useState } from 'react';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'frontend' },
    { id: 2, title: 'PhP', body: 'backend' },
    { id: 3, title: 'Ruby', body: 'backend' },
  ])

  return (
    <div className='container pt-5'>
     <PostList posts={posts}/>
    </div>

  );
}

export default App;
