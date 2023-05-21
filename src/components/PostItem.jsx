import React from 'react'

export default function PostItem({ post }) {

  return (
    <div className="post">
      <div className="post__content">
        <div className="post__title">{post.title}</div>
        <hr />
        <div className="post__body">{post.body}</div>
      </div>
      <button className="btn btn-success">Удалить</button>
    </div>
  )
}
