import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import App from './App'
import './index.css'
import reducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
)
