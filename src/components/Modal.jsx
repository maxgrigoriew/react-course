import React from 'react'
import { CSSTransition } from 'react-transition-group'

export default function Modal({
    createPost,
    children,
    visible,
    setVisible
}) {
    return (
        <div className="form-modal" onClick={() => setVisible(false)}>
            <div
                className="form-modal__inner"
                onClick={e => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            Modal title
                        </h5>
                        <button
                            type="button"
                            className="close"
                            onClick={() => setVisible(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    )
}
