import React from 'react'
import Post from './Post/Post'

export default function PostsList({ posts, title, remove }) {

  if (!posts.length)
    return <h2 className="text-center text-danger">Список пуст</h2>

  return (
    <div>
      <h2 style={{
        textAlign: 'center',
        color: 'red'
      }}>{title}</h2>

      {
        posts.map((post, index) =>
          <Post
            remove={remove}
            post={post}
            key={post.id}
            number={index + 1}
          />)
      }
    </div>
  )
}
