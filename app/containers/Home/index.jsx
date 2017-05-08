import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import {connect} from 'react-redux'
class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category />
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