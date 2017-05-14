import React from 'react'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { hashHistory } from 'react-router'


import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import {CITYNAME} from '../../config/localStor'
import localStor from '../../util/localStor'

import './style.less'
class City extends React.Component {

    handleClickBack(){
        window.history.back()
    }
    handleChangeCity(newCity){
        if(!newCity){
            return
        }
        //修改redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userinfoActions.update(userinfo)

        localStor.setItem(CITYNAME, newCity)
        
        // 跳转页面至首页，这会导致首页的重新渲染
        hashHistory.push('/')
    }
    render(){
        console.log(this.props.userinfoActions)
        return (
            <div className="city">   
                <Header title='选择城市'/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList handleChangeCity={this.handleChangeCity.bind(this)}/>
            </div>
            
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {
        userinfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

City = connect(mapStateToProps, mapDispatchToProps)(City)
export default City