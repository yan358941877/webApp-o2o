import React from 'react'
import CommonHeader from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/Comment'
import Buy from './subpage/Buy'
class Detail extends React.Component{

    componentDidMount(){

    }
    render(){
        // 由于注重前端功能部分，因此该部分只会呈现相同的数据
        // id指的是商户的id
        let id = this.props.params.id
        if(id==='undefined'){
            id='0514'
        }
     
        return (
            <div>
                <CommonHeader title='商户详情'/>
                <Info id = {id} />
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}

export default Detail