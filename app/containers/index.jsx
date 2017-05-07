import React from 'react'
import localStor from '../util/localStor'
import {CITYNAME} from '../config/localStor'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            initDone: false,
            cityName: ''
        }
    }
    componentDidMount() {
        
        // 将城市信息从localStorage中获取出来
        let cityName = ''
        cityName = localStor.getItem(CITYNAME)
        if (!cityName) {
            cityName = '北京'
        }

        // 获取到cityName，然后将cityName存储到store中\
        // console.log('aaa')
        // console.log(this.props)
        this.props.userInfoActions.update({
            cityName: cityName
        })
        this.setState({
            initDone: true,
            cityName: cityName
        })
    }
    render() {
        console.log(this.state.cityName)
        return (
            <div>
                {
                    this.state.initDone
                        ? this.props.children
                        : <p>{this.state.cityName}</p>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {}
}

const mapDispatchToProps = (dispatch)=> {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
    
}
App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App