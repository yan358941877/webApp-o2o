import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/SearchList'

import './style.less'

class Search extends React.Component {

    render(){
        let params = this.props.params
        let type = params.type
        let keyword = params.keyword
        console.log(params)
        return (
            <div>
                <SearchHeader keyword={keyword}/>
                <SearchList type={type} keyword={keyword}/>
            </div>
            
        )
    }
}

export default Search