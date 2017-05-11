import React from 'react'
import GuessItem from './GuessItem'
import './style.less'
class GuessList extends React.Component {
    render(){
        return (
            <ul id="guess-list-container">
                {
                    this.props.data.map((item, index)=>{
                        return <GuessItem key={index} data={item} />
                    })
                }
            </ul>
        )
    }

}

export default GuessList