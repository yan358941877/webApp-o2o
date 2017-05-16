import React from 'react'
import './style.less'
import Header from '../../components/Header'
import OrderList from './subpage/OrderList'

import {connect} from 'react-redux'
import {hashHistory} from 'react-router'


class User extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id="user-page">
                <Header title='用户主页' backRouter='/'/>
                <div id="userinfo">
                    <p>
                        <i className='icon-user'></i>
                        {this.props.userinfo.username}
                    </p>
                    <p>
                        <i className='icon-map-marker'></i>
                        {this.props.userinfo.cityName}
                    </p>
                </div>
                {/*
                在当前页面中，如果有一部分(组件)需要与服务器进行数据交互，
                则可以将该部分内容视为一个子页面，将其提取出来单独进行开发
                原因： 减少当前模块的复杂程度，提高代码的可读性与可维护性
                */}
                <OrderList username={this.props.userinfo.username}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}
function mapDispatchToProps(dispatch){
    return {

    }
}
User = connect(mapStateToProps, mapDispatchToProps)(User)
export default User