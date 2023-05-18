import React from 'react'
import MyButton from '../UI/Button/MyButton'
import styles from './Post.module.css'

export default function Post({ post, number, remove }) {
  return (
    <div className={styles.post}>
      <div className="post__content">
        <div className="post__title">
          <span>{number}.</span>
          <span>{post.title}</span>
        </div>
        <div className="post__body">{post.body}</div>
      </div>
      <MyButton onClick={() => remove(post)} className="btn btn-primary">button</MyButton>
    </div>
  )
}
