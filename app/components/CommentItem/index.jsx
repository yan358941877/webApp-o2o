import React from 'react'
import Star from '../Star'
import './style.less'

class CommentItem extends React.Component{
    render(){
        const comment = this.props.comment
        return (
            <div className="comment-item">
                <div className="user-info">
                    <span><i className="icon-user"></i></span>
                    <span>{comment.username}</span>
                </div>
                <Star stars={comment.star} />
                <div className="comment-content">
                    <p>{comment.comment}</p>
                </div>
            </div>
        )
    }
}

export default CommentItem