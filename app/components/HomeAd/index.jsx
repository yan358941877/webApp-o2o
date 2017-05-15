import React from 'react'
import './style.less'

class HomeAd extends React.Component {
    render() {
        //console.log(this.props.data)
        return (         
            <div id="super-overbalance">
                <h2>超级特惠</h2>
                <div className="overbalance-container clear-fix">
                {this.props.data.map((item, index) => {
                    return <div key={index} className="overbalance-item"> 
                            
                            <a href={item.link}>
                                <img src={item.img}/>
                            </a>
                        </div>
                })}
                </div>
            </div>     
        )
    }
}

export default HomeAd