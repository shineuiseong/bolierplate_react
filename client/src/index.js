import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// 알람
import { ToastContainer } from 'react-toastify'

// 리덕스
import { Provider } from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import userReducer from './store/user'
import loginStepReducer from './store/loginStep'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['user'],
}

const reducers = combineReducers({
  user: userReducer,
  loginStep: loginStepReducer,
})
const _persistedReducer = persistReducer(persistConfig, reducers)

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
})
const store = configureStore({
  reducer: _persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: customizedMiddleware,
})

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
