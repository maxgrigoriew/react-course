import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function PostList({ posts, title, remove }) {
  if (posts.length === 0) {
    return <h4 className="text-danger">Постов нет</h4>
  }

  return (
    <div>
      {posts.map(post => (
        <PostItem post={post} key={post.id} remove={remove} />
      ))}
    </div>
  )
}
