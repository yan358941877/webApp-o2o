import React from 'react'
import {getGuesslist}  from '../../../fetch/home/home'
import GuessListDumb from '../../../components/GuessList'
import './style.less'
class GuessList extends React.Component {
    constructor(){
        super()
        this.state = {
            data: [],
            hasmore: true
        }
    }
    componentDidMount(){
        let result = getGuesslist()
        result.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                data: json.data,
                hasmore: json.hasmore
            })
        })
    }
    render(){
        return (
            <div id="guess-like">
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <GuessListDumb data={this.state.data}/>
                    : "loaing..."
                }
            </div>
            
        )
    }
}

export default GuessList