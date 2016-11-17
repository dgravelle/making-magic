import React from 'react';
import { Link } from 'react-router';
import './NavBar.less';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

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
                    <button onClick={this.props.showLock} className="btn btn--signup">Sign up</button>
                </div>
            </nav>
        )
    }
}

export default NavBar;
