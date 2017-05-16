import React from 'react'
import './style.less'
import OrderItem from '../OrderItem'
class OrderList extends React.Component{
    render(){
        return(
            <div className='OrderList'>
                {
                    this.props.orderlist.map((item, index)=>{
                        return <OrderItem item={item} key={index} />
                    })
                }
            </div>
        )
    }
}

export default OrderList