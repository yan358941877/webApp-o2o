import React from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {hashHistory} from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/LoginComponent'

import './style.less'

class LoginContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            checking: true
        }
    }

    componentDidMount(){
        this.doCheck()
    }
    doCheck(){
        const userinfo = this.props.userinfo
        if(userinfo.username){
            // 如果存在username，则说明已经登录
            // 去往 用户中心页面
        }else{
            // 尚未登录
            this.setState({
                checking: false
            })
        }
    }
    // 登录成功之后的处理
    handleLogin(username){
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)

        // 跳转链接
        const params = this.props.params
        const router = params.router
        
        if(router){
            hashHistory.push('router')
        }else { //跳转到用户中心页面
            hashHistory.push('User')
        }
    }
    render(){
        console.log(this.props)
        console.log(this.state.checking)
        return (
            <div>
                <Header title='用户登录'/>
                {
                    this.state.checking
                    ? <div>{/*等待中*/}</div>
                    : <LoginComponent handleLogin={this.handleLogin.bind(this)}/>
                }
            </div>
        )
    }
}


//----------------------redux react 绑定----------------------------

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
export default LoginContainer