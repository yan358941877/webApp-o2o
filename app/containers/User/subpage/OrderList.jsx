import React from 'react'
import './style.less'

import {getOrderListData} from '../../../fetch/user/user'
import OrderListComponent from '../../../components/OrderList'

class OrderList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            orderlist: []
        }
    }
    componentDidMount(){
        const username = this.props.username
        const result = getOrderListData(username)
        result.then(res=>{
            return res.json()
        }).then(json=>{
            this.setState({
                orderlist: json
            })
        })
    }
    render(){
        console.log(this.state.orderlist)
        return (
            <div className='OrderList'>
                <h3>订单列表</h3>
                {
                    this.state.orderlist.length
                    ? <OrderListComponent orderlist={this.state.orderlist}/>
                    :''
                }
            </div>
            
        )
    }
}

export default OrderList