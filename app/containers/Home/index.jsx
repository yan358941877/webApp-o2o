import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import GuessList from './subpage/GuessList'
import {connect} from 'react-redux'
class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category />
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad/>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <GuessList />
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {userinfo: state.userinfo}
}

const mapDispatchToProps = (dispatch)=> {
    return {}
    
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home