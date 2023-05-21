import { useMemo, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'frontend' },
    { id: 2, title: 'PhP', body: 'backend' },
    { id: 3, title: 'Ruby', body: 'backend' },
  ])
  const [filter, setFilter] = useState({
    query: '',
    sort: ''
  })

  // sort posts and caesh
  const sortedPosts = useMemo(() => {
    if (filter.sort !== '') {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  // add post
  const createPost = (newPost) => {
    setPosts([newPost, ...posts,])
  }

  // remove post
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((item) => item.title.toLowerCase().includes(filter.query.toLowerCase())
      || item.body.toLowerCase().includes(filter.query.toLowerCase())
    )
  }, [filter.query, sortedPosts])

  return (
    <div className='container pt-5'>
      <div>hello</div>
     </div>

  );
}

export default App;
