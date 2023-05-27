import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {
  return (
    <div>
      <h2>{title}</h2>
      {posts.map((post) => 
        <PostItem post={post} key={post.id} remove={remove}/>
      )
      }
    </div>
  )
}
