import React from 'react'
import './style.less'
import BuyAndStore from '../../../components/BuyAndStore'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'
import * as storeActionsFromFile from '../../../actions/store'

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

    // 验证登录
    loginCheck(){
        const id = this.props.id
        const userinfo = this.props.userinfo
        // 用户登录时，会给userinfo添加username属性
        if(!userinfo.username){
            //如果用户没有登录,则跳转到登录页面
            hashHistory.push('/login/'+ encodeURIComponent('detail/'+ id))
            return false
        }
        return true
    }
    // 检测当前商户是否已被收藏
    checkStoreState(){
        const id = this.props.id
        const store = this.props.store

        store.some(item=>{
            if(item.id === id){
                this.setState({
                    isStore: true
                })
                // 跳出循环
                return true
            }
        })
    }
    // 处理收藏
    handleStore(){
        const isLogin = this.loginCheck()
        if(!isLogin){
            return 
        }
        console.log('aaa')
        const id = this.props.id
        const storeActions = this.props.storeActions

        if(this.state.isStore){  //表示当前商户是否被收藏
            // 当前商户已被收藏，点击时取消收藏
            storeActions.remove({id: id})

        }else{
            // 当前商户没有被收藏，点击时添加收藏
            storeActions.add({id:id})
        }

        this.setState({
            isStore: !this.state.isStore
        })
    }
    render(){
        console.log(this.props)
        return(
            <BuyAndStore 
                isStore = {this.state.isStore}
                handleBuy = {this.handleBuy.bind(this)}
                handleStore = {this.handleStore.bind(this)}/>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}
function mapDidspatchToProps(dispatch){
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
Buy = connect(mapStateToProps, mapDidspatchToProps)(Buy)
export default Buy