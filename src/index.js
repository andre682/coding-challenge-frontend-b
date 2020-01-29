import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import App from './js/App.jsx'
import rootReducer from './js/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)
const wrapper = document.getElementById('app')

ReactDOM.render(jsx, wrapper)
