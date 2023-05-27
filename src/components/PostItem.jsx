import React from 'react'
import Button from './Button'

export default function PostItem({ post, remove }) {
    return (
        <div className="card p-3 mb-3" style={{ border: '3px solid green' }}>
            <div className="row">
                <div className="col-10">
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </div>
                <div className="col">
                    <Button
                        className="btn btn-danger"
                        onClick={() => remove(post)}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        </div>
    )
}
