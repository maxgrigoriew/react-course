import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {
  if (!posts) {
    return <div>Постов нет</div>
  }
  
  return (
    <div>
      {posts.map((post) => 
        <PostItem post={post} key={post.id} remove={remove}/>
      )
      }
    </div>
  )
}
