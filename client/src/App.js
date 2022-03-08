import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// 페이지
import Main from './page/main/main'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/main']}>
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
