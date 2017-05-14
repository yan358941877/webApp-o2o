import React from 'react'
import './style.less'


/*希望多个组件共用这一个组件*/ 
class Header extends React.Component {
    handleClickBack(){
        window.history.back()
    }
    render(){
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.handleClickBack}>
                    <i className='icon-chevron-left'></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Header