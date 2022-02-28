import React from 'react'
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import Main from './layout/main'
import Login from './layout/login'
import User from './layout/user'
import NotFound from './component/ui/notFound.jsx'
import NavBar from './component/ui/navBar'
import UserById from './component/page/userPage/userById'
import UserEdit from './component/page/userPage/userEdit'

const App = () => {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Switch>
          <Route path='/user/:userById/userEdit' component={UserEdit} />
          <Route path='/user/:userById?' component={User} />
          <Route path='/login/:type?' component={Login} />
          <Route path='/404' component={NotFound} />
          <Route path='/' exact component={Main} />
          <Redirect to='/404' />
        </Switch>
      </>
    </BrowserRouter>
  )
}

export default App
