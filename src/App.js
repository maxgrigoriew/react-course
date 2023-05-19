import { useState } from 'react';
import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsList';
import MyButton from './components/UI/Button/MyButton';
import MySelect from './components/UI/MySelect/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: '1Javascript', body: '1Description 1' },
    { id: 2, title: '2PhP', body: '2Description 2' },
    { id: 3, title: '3Ruby', body: '3Description 3' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([newPost, ...posts,])
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const [count, setCount] = useState(0)

  const changeCount = () => {
    setCount(count + 1)
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className='container pt-5'>
      <MyButton onClick={changeCount} />
      <PostForm
        create={createPost} />

      <MySelect
        selectValue={selectedSort}
        onChangeCallback={sortPosts}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]} />
      <PostsList
        posts={posts}
        title='Это список постов'
        remove={removePost} />
    </div >

  );
}

export default App;
