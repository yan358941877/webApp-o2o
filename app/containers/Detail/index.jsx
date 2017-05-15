import React from 'react'
import CommonHeader from '../../components/Header'
import Info from './subpage/Info'
class Detail extends React.Component{

    componentDidMount(){

    }
    render(){
        // 由于注重前端功能部分，因此该部分只会呈现相同的数据
        const id = this.props.params.id

        return (
            <div>
                <CommonHeader title='商户详情'/>
                <Info id = {id} />
            </div>
        )
    }
}

export default Detail