import React from 'react'

import './style.less'

class LoadMore extends React.Component{

    handleClick(){
        if(this.props.handleClick){
            this.props.handleClick()
        }
    }
    render(){
        
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>正在加载中...</span>
                    :<span onClick={this.handleClick.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    componentDidMount(){
        const loadMoreFn = this.props.handleClick
        const wrapper = this.refs.wrapper

        let timeoutId
        function callback(){
            // wrapper 距离浏览器顶部的距离
            const top = wrapper.getBoundingClientRect().top
            const windowHegiht = window.screen.height
            // 当wrapper组件暴露在浏览器窗口页面上时，则触发加载元素
            if(top&& top < windowHegiht){
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function(){
            if(this.props.isLoadingMore){
                return 
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false)
    }
}

export default LoadMore