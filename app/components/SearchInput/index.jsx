import React from 'react'
import './style.less'
class SearchInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            keywords: ''
        }
    }
    componentDidMount(){
        if(this.props.value){
            this.setState({
                value: this.props.value
            })
        }
    }
    handleChange(event){
        let value = event.target.value
        this.setState({
            value: value
        })
    }
    handleSubmit(event){
        // console.dir(event.charCode)
        if(event.charCode==13 && this.props.handleSubmit){
            this.props.handleSubmit(this.state.value)
            this.setState({
                value: ''
            })
        }
    }
    render(){
        return (
            <input 
                className="search-input" 
                placeholder='请输入关键字' 
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleSubmit.bind(this)}/>
        )
    }
}

export default SearchInput