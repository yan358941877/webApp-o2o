import React from 'react'
import './style.less'
import {hashHistory} from 'react-router'

/*希望多个组件共用这一个组件*/ 
class Header extends React.Component {
    
    handleClickBack(){
        if(this.props.backRouter){
            hashHistory.push(this.props.backRouter)
        }else {
            window.history.back()
        }
        
    }
    render(){
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.handleClickBack.bind(this)}>
                    <i className='icon-chevron-left'></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Header