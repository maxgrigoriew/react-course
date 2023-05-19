import { useMemo, useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList';
import MySelect from './components/UI/MySelect/MySelect';
import MyInput from './components/UI/MyInput/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'frontend' },
    { id: 2, title: 'PhP', body: 'backend' },
    { id: 3, title: 'Ruby', body: 'backend' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  
  // sort posts and caesh
  const sortedPosts = useMemo(() => {
    if (selectedSort !== '') {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  // add post
  const createPost = (newPost) => {
    setPosts([newPost, ...posts,])
  }

  // remove post
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())
    || item.body.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, sortedPosts])

  return (
    <div className='container pt-5'>
      <PostForm
        create={createPost} />
      <MyInput
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder='Поиск' />
      <MySelect
        selectValue={selectedSort}
        onChangeCallback={sortPosts}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]} />
      <PostsList
        posts={searchedAndSortedPosts}
        title='Это список постов'
        remove={removePost} />
    </div >

  );
}

export default App;
