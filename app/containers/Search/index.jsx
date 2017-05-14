import React from 'react'
import SearchHeader from '../../components/SearchHeader'
import './style.less'

class Search extends React.Component {

    render(){
        let params = this.props.params
        let type = params.type
        let keyword = params.keyword
        
        return (
            <div>
                <SearchHeader keyword={keyword}/>
                
            </div>
            
        )
    }
}

export default Search