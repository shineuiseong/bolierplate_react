import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// 페이지
import Main from './page/main/main'
import SettingContainer from './components/setting_container/setting_container'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/main']}>
          <Main />
        </Route>
        <Route path="/setting">
          <SettingContainer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
