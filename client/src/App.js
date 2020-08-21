import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import PublicPage from './pages/PublicPage'
import AuthContainer from './containers/AuthContainer'

function App() {
  return (
    <Switch>
      <Route exact path="/welcome" component={PublicPage} />
      <AuthContainer>
        <Route exact path="/" component={HomePage} />
      </AuthContainer>
    </Switch>
  )
}

export default App
