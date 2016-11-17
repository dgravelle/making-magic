import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
// import styles from './styles.module.less'

export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
        <ButtonToolbar >
          <button onClick={auth.login.bind(this)}>Login</button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default Login;