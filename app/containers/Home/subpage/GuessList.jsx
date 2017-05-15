import React from 'react'
import {getGuesslist}  from '../../../fetch/home/home'
import GuessListDumb from '../../../components/GuessList'
import LoadMore from '../../../components/LoadMore'
import './style.less'
class GuessList extends React.Component {
    constructor(){
        super()
        this.state = {
            data: [],  // 存储列表信息
            hasMore: false, // 记录当前状态下，还有没有更多的数据可供加载
            isLoadingMore: false, // 记录当前状态下，是加载中，还是点击加载更多
            page: 1 //下一页的页码(页面加载是会加载第一页，page为0)

        }
    }
    componentDidMount(){
        // const cityName = this.props.cityName
        // let result = getGuesslist(cityName, 0)
        // result.then(res=>{
        //     return res.json()
        // }).then(json=>{
        //     this.setState({
        //         data: json.data,
        //         hasMore: json.hasmore
        //     })
        // })
        this.loadFirstPageData()
    }
    loadFirstPageData(){
        const cityName = this.props.cityName
        const result = getGuesslist(cityName, 0)
        this.resultHandle(result)
    }
    // 当点击时，加载更多数据，并修改state
    loadMoreData(){
        //记录状态
        this.setState({
            isLoadingMore: true
        })
        const cityName = this.props.cityName
        const page = this.state.page
        const result = getGuesslist(cityName, page)
        this.resultHandle(result)

        // 增加 page的计数

        this.setState({
            page: page+1,
            isLoadingMore: false
        })
    }
    resultHandle(result){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            const hasMore = json.hasMore
            const data = json.data
            // 由于加载一次数据只能获取一页数据，如果用返回数据直接setState，会覆盖之前的数据
            this.setState({
                data: this.state.data.concat(json.data),
                hasMore: hasMore
            })
        })
    }
    render(){
        //console.log(this.state.hasMore)
        return (
            <div id="guess-like">
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <GuessListDumb data={this.state.data}/>
                    : <div>{/*"loaing..."*/}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore 
                        handleClick={this.loadMoreData.bind(this)}
                        isLoadingMore={this.state.isLoadingMore}/>
                    :''
                }
            </div>
            
        )
    }
}

export default GuessList