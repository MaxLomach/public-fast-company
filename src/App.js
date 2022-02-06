import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Main from './layout/main'
import Login from './layout/login'
import User from './layout/user'
import NotFound from './component/ui/notFound.jsx'
import NavBar from './component/ui/navBar'
import UserById from './component/page/userPage/userById'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/user' component={User} />
          <Route path='/userById/:userById?' component={UserById} />
          <Route path='/404' component={NotFound} />
          <Redirect to='/404' />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
