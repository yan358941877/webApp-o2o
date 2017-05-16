import React from 'react'
import './style.less'

class BuyAndStore extends React.Component {
    handleStore(){
        console.log('456', this.props)
        if(this.props.handleStore){
            this.props.handleStore()
        }
        console.log('789', this.props)
    }
    render(){
        console.log('123', this.props)
        return(
            <div id='buy-store'>
                <span className='buy'>购买</span>
                <span 
                    className='store'
                    onClick={this.handleStore.bind(this)}>{this.props.isStore?'已收藏':'收藏'}</span>
            </div>
        )
    }
}

export default BuyAndStore