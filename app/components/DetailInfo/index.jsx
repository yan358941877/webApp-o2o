import React from 'react'
import './style.less'
import Star from '../Star'
class DetailInfo extends React.Component{
    render(){
        var data = this.props.data
        console.log(data)
        return (
            <div className='DetailInfo'>
                <div className="info-container clear-fix">
                    <img className='float-left' src={data.img} />
                    <div className='description'>
                        <h2 className='title'>{data.title}</h2>
                        <p className='star-price'>
                            <Star stars={data.star}/>
                            &nbsp;
                            <span className='price'>￥{data.price}</span>
                        </p>
                        <p className='subTitle'>{data.subTitle}</p>
                    </div>
                </div>
                <div className='opentime'>
                    <p dangerouslySetInnerHTML={{__html:data.desc}}></p>
                </div>
            </div>
        )
    }
}

export default DetailInfo