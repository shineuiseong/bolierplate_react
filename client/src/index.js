import React from 'react'
import ReactDOM from 'react-dom'
import App from './shared/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals'
import Header from './components/Header/Header'

// -- redux --
import { Provider } from 'react-redux'
import store from './redux/configureStore'

import { ThemeProvider } from 'styled-components'
import theme from './shared/thema'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
