import React from 'react'
import CommentItem from '../CommentItem'

import './style.less'

class CommentList extends React.Component{
    render(){
        const comments = this.props.comments
        return(
            <div className="CommentList">
                {
                    comments.map((comment, index)=>{
                        return <CommentItem key={index} comment={comment} />
                    })
                }
                
            </div>
        )
    }
}

export default CommentList