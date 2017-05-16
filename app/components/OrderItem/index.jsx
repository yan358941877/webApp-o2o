import React from 'react'
import './style.less'

class OrderItem extends React.Component{
    render(){
        console.log(this.props)
        const item = this.props.item
        return (
            <div className='order-item clear-fix'>
                <div className="order-item-img float-left">
                    <img src={item.img}/>
                </div>
                <div className="order-item-des float-left">
                    <p className='order-name'>商户：{item.title}</p>
                    <p className='order-num'>数量：￥{item.price}</p>
                    <p className='order-name'>价格：{item.count}</p>
                </div>
            </div>
        )
    }
}

export default OrderItem