import React from 'react'
import './style.less'
import BuyAndStore from '../../../components/BuyAndStore'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
class Buy extends React.Component {
    //需要告诉组件，这个商户是否已经被收藏了。如果已经被收藏需要显示“已收藏”文字，如果未被收藏需要显示“收藏”按钮

    constructor(props){
        super(props)
        this.state = {
            isStore: false
        }
    }

    handleBuy(){
        // 点击购买时，应该先验证用户是否登录
        const islogin = constthis.loginCheck()
        if(!islogin){
            return
        }

        // 购买的流程 这部分主要是后端相关的
        

        // 跳转到用户主页，在用户主页中能够看到用户的购买记录
        hashHistory.push('user')
    }
    handleStore(){
        // 点击收藏时，应该先验证用户是否登录
    }

    // 验证登录
    loginCheck(){
        const id = this.props.id
        const userinfo = this.props.userinfo
        // 用户登录时，会给userinfo添加username属性
        if(!userinfo.username){
            //如果用户没有登录,则跳转到登录页面
            hashHistory.push('/login'+ encodeURIComponent('/detail/'+ id))
            return false
        }
        return true
    }
    render(){
        return(
            <BuyAndStore 
                isStore = {this.state.isStore}
                handleBuy = {this.handleBuy.bind(this)}
                handleStore = {this.handleStore.bind(this)}/>
        )
    }
}

export default Buy