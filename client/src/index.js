import React from 'react'
import ReactDOM from 'react-dom'
import App from './shared/App'
// import Header from './components/Header/Header'

import GlobalStyle from './static/style/GlobalStyle'

// -- redux --
import { Provider } from 'react-redux'
import store from './redux/configureStore'

import { ThemeProvider } from 'styled-components'
import theme from './shared/thema'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
