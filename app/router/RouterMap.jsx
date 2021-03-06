import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import LoginContainer from '../containers/LoginContainer'
import User from '../containers/User'
class RouterMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='/city' component={City} />
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail} />
                    <Route path='/login(/:router)' component={LoginContainer}/>
                    <Route path='/user' component={User}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap