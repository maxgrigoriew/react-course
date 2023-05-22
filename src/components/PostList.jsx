 import React from 'react'
import PostItem from './PostItem'
 
 export default function PostList({posts, title, remove}) {
 
   return (
     <div>
      <h1>{title}</h1>
      {
         posts.length 
      ?
        posts.map((post) => 
        <PostItem 
          post={post} 
          key={post.id}
          remove={remove}
        />) 
        : <div>Нет постов</div>
      }
     </div>
   )
 }
 