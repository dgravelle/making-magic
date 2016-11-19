import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from '../../utils/AuthService'
import Container from './Container'
import Home from './Home/Home'
import Login from './Login/Login'
import DeckBuilder from '../../components/Decks/DeckEditor';
import NotFound from '../Main/NotFound/NotFound';

const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="login" component={Login} />
      <Route path="deckbuilder" component={DeckBuilder} />
      <Route path="*" component={NotFound} />
    </Route>
  )
}

export default makeMainRoutes
