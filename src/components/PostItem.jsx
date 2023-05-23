import React from 'react'

export default function PostItem({ post, remove }) {
  const removePost = () => {
    remove(post)
    console.log(post);
    
  }

  return (
    <div className="post">
      <div className="post__content">
        <span className='text-warning text-bold'>{post.id}</span>
        <div className="post__title">{post.title}</div>
        <hr />
        <div className="post__body">{post.body}</div>
      </div>
      <button onClick={removePost} className="btn btn-success">Удалить</button>
    </div>
  )
}
