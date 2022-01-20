import React from 'react'
// import Users from './component/users'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Main from './component/layout/main'
import Login from './component/layout/login'
import User from './component/layout/user'
import NotFound from './component/notFound'
import NavBar from './component/navBar'
import UserById from './component/userById'

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
