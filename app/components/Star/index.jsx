import React from 'react'
import './style.less'

class Star extends React.Component {
    render(){
        let stars = this.props.stars || 0
        if(stars>5){
            stars = stars%5
        }
        return(
            <span className="star-container">
                {
                    [1,2,3,4,5].map((item, index)=>{
                        const lightClass = stars >= item ?' light':''
                        return <i key={index} className={'icon-star'+lightClass}></i>
                    })
                }
            </span>
        )
    }
}

export default Star