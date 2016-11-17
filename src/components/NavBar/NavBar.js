import  React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import './NavBar.less';
import AuthService from '../../utils/AuthService';


class NavBar extends React.Component {
    static contextTypes = {
        router: T.object
      }

      static propTypes = {
        location: T.object,
        auth: T.instanceOf(AuthService)
      }

    render() {

        return (
            <nav className="navbar">
                <div className="navbar-left">
                    <Link to="/" className="logo-link">
                        <i className="ss ss-pmtg1"></i>
                    </Link>
                </div>
                <div className="navbar-right">
                    {/* <button onClick={this.props.showLock} className="btn btn--signup">Sign up</button> */}
                    <a className="btn btn--signup" onClick={this.props.auth.login.bind(this)}>Login</a>
                </div>
            </nav>
        )
    }
}

export default NavBar;
