import React from 'react'
import List from '../../../components/GuessList'
import LoadMore from '../../../components/LoadMore'

import {getSearchList} from '../../../fetch/search/search'

import {connect} from 'react-redux'

class SearchList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 1
        }
    }

    componentDidMount(){

        let city = this.props.userinfo.cityName
        let type = this.props.type
        let keyword = this.props.keyword
        let result = getSearchList(city,type,keyword,0)
        
        result.then(res=>{
            return res.json()
        }).then(json=>{
            let data = json.data
            let hasMore = json.hasMore
            console.log(json)
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            })
        })
    }
    getMoreData(){
        this.setState({
            isLoadingMore: true
        })
        let city = this.props.userinfo.cityName
        let type = this.props.type
        let keyword = this.props.keyword
        let page = this.state.page
        let result = getSearchList(city,type,keyword,page)
        this.handleResult(result)

    }
    handleResult(result){
        result.then(res=>{
            return res.json()
        }).then(json=>{
            let data = json.data
            let hasMore = json.hasMore
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore,
                isLoadingMore: false,
                page: this.state.page +1
            })
        })
    }
    render(){
        console.log(this.props.userinfo.cityName)
        return <div>
            {
                this.state.data.length
                ? <List data={this.state.data} />
                : <div>正在加载中</div>
            }
            {
                this.state.hasMore
                ? <LoadMore 
                      handleClick={this.getMoreData.bind(this)}
                      isLoadingMore={this.state.isLoadingMore}/>
                : ''
            }
        </div>
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {}
}


SearchList = connect(mapStateToProps,mapDispatchToProps)(SearchList)
export default SearchList