import React from 'react'
import './style.less'

class LoginComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            phone: '',
            password: ''
        }
    }
    handleChangePhone(event){
        this.setState({
            phone: event.value
        })
    }
    handleChangePassword(event){
        this.setState({
            password: event.value
        })
    }
    handleSubmit(){
        if(!this.refs.phone.value){
            alert('请输入手机号')
            return
        }
        if(!this.refs.password.value){
            alert('请输入密码')
            return
        }
        if(this.props.handleLogin){
            this.props.handleLogin(this.state.phone)
        }
    }
    render(){
        return(
            <div id="login-component">
                <div className="phone">
                    <i className='icon-photo'></i>
                    <input 
                        ref='phone'
                        placeholder='请输入手机号' 
                        onChange={this.handleChangePhone.bind(this)}
                        value={this.state.phone}/>
                </div>
                <div className="password">
                    <i className='icon-key'></i>
                    <input 
                        ref='password'
                        type="password" 
                        placeholder='请输入密码' 
                        onChange={this.handleChangePassword.bind(this)}
                        value={this.state.passwrod}/>
                </div>
                <div className="submit" onClick={this.handleSubmit.bind(this)}>
                    登录
                </div>
            </div>
        )
    }
}

export default LoginComponent