import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Select from './components/Select';
import Input from './components/UI/Input';

function App() {
  const [posts, setPosts] = useState([
    { id: 2, title: 'PhP', body: 'backend' },
    { id: 1, title: 'Javascript', body: 'frontend' },
    { id: 3, title: 'Ruby', body: 'backend' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

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
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])) 
    }
    return posts
  }, [posts, selectedSort])

  const filtredAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
  return (
    <div className='container pt-5'>
      <Navbar/>
     <PostForm create={createPost}/>
     
     <hr />

     <Input value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
     <Select 
        value={selectedSort} 
        options={options}
        onChange={sortPosts}

        />
     <PostList posts={filtredAndSortedPosts} remove={removePost} title={"Список постов!"}/>
    </div>

  );
}

export default App;
