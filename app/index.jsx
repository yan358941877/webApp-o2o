import React from 'react'
import {render} from 'react-dom'
import {hashHistory} from 'react-router'
import {Provider} from 'react-redux'

import RouterMap from './router/RouterMap'
import configureStore from './store/configureStore'

const store = configureStore()
render(
    <Provider store={store}>
        <RouterMap history={hashHistory} />
    </Provider>,
    document.getElementById('root')
)