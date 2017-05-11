import React from 'react'
import './style.less'
class GuessItem extends React.Component {
    render(){
        let data = this.props.data
        return (
            <div className="guess-item">
                <div className="item-img-container float-left">
                    <img src={data.img} alt={data.title}/>
                </div>
                <div className="item-content">
                    <div className="item-title-container clear-fix">
                        <h3 className="float-left">{data.title}</h3>
                        <span className="float-right">{data.distance}</span>
                    </div>
                    <p className="item-sub-title">
                        {data.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                        <span className="price float-left">￥{data.price}</span>
                        <span className="number float-right">已售{data.number}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default GuessItem