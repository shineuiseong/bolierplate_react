import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'

//-- module --
import User from './modules/user'

//---- history----
export const history = createBrowserHistory()

//---- rootReducer ----
const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
})

const middleware = [thunk.withExtraArgument({ history: history })]

const env = process.env.NODE_ENV

if (env === 'development') {
  const { logger } = require('redux-logger')
  middleware.push(logger)
}

//---- redux devTools ----
const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

//---- 미들웨어 묶기 ----
const enhancer = composeEnhancers(applyMiddleware(...middleware))

//---- 스토어 만들기 ----
let store = (initialStore) => createStore(rootReducer, enhancer)

export default store()
