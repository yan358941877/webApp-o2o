import React from 'react'
import SearchInput from '../SearchInput'
import {hashHistory, Link} from 'react-router'
import './style.less'

class SearchHeader extends React.Component{
    handleSubmit(value){
        hashHistory.push('/search/all/'+ encodeURIComponent(value))
    }
    handleClickBack(){
        hashHistory.push('/')
    }
    render(){
        return(
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.handleClickBack}>
                    <i className='icon-chevron-left'></i>
                </span>
                <div className="input-container">
                        <i className="icon-search"></i>
                        <SearchInput 
                            value={this.props.keyword||''} 
                            handleSubmit={this.handleSubmit.bind(this)}/>
                </div>
                
            </div>
        )
    }
}

export default SearchHeader