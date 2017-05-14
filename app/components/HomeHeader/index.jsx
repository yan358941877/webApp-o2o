import React from 'react'
import './style.less'
import {Link, hashHistory} from 'react-router'
import SearchInput from '../SearchInput'

class HomeHeader extends React.Component{
    constructor(props,context){
        super(props, context)
        
    }
    handleSubmit(value){
        hashHistory.push('/search/all/'+ encodeURIComponent(value))
    }
    render(){
        return(
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                    
                </div>
                <div className="home-header-right float-right"><i className="icon-user"></i></div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="景点" handleSubmit={this.handleSubmit.bind(this)}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default HomeHeader