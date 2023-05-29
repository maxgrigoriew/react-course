import { useMemo, useState } from 'react'
import PostItem from './components/PostItem'
import Select from './components/Select'

function App() {
  const [posts, setPosts] = useState([
    {
      title: 'Ruby',
      body: 'Описание 1',
      id: 1
    },
    {
      title: 'Pyton',
      body: 'Описание 2',
      id: 2
    },
    {
      title: 'Js',
      body: 'Описание 3',
      id: 3
    }
  ])

  const [sort, setSort] = useState('')


  const sortedPosts = useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => {
        if (a[sort] > b[sort]) {
          return -1
        }
      })
      : posts
  }, [posts, sort])


  return (
    <div className="container pt-5">

      <Select value={sort} onChange={post => setSort(post)} options={[
        {value: 'title', name: 'Нозвание'},
        {value: 'body', name: 'Описание'},
      ]} />
      {
        sortedPosts.map((post) => {
          return <PostItem post={post} key={post.id}/>
        })
      }
    </div>
  )
}

export default App