import React, { PropTypes as T } from 'react';
import AuthService from 'utils/AuthService';

export class LoginButton extends React.Component {
    static propTypes = {
        location: T.objects,
        auth: T.instanceOf(AuthService)
    }

    render() {
        const { auth } = this.props

        return (
            <button className="btn btn--login" onClick={auth.login.bind(this)}>Login</button>
        )
    }
}

export default LoginButton;
