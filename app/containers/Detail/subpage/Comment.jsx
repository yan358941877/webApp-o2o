import React from 'react'
import './style.less'
import {getCommentData} from '../../../fetch/detail/detail'
import CommentList from '../../../components/CommentList'
class Comment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            page: 1,
            hasMore: false,
            isLoading: false
        }
    }
    componentDidMount(){
        let result = getCommentData(0, this.props.id)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            console.log(json)
            this.setState({
                data: json.data,
                hasMore: json.hasMore
            })
        })
    }

    handleResult(res){ 
        res.then(res=>{
            return res.json()
        }).then(json=>{
            //console.log(json)
            this.setState({
                data: this.state.data.concat(json.data),
                page: json.page,
                hasMore: json.hasMore,
                isLoading: false
            })
        })
    }
    loadMoreData(){
        this.setState({
            isLoading: true
        })
        let page = this.state.page
        let result = getCommentData(page, this.props.id)
        this.handleResult(result)
    }
    render(){
        return(
            <div className="Comment-container">
                <h3>用户评论</h3>
                <CommentList
                    comments={this.state.data} 
                    hasMore={this.state.hasMore}/>
                {
                    this.state.hasMore
                    ? <p 
                        className="isLoading"
                        onClick={this.loadMoreData.bind(this)}>正在加载中...</p>
                    : ''
                }
            </div>
            
        )
    }
}

export default Comment