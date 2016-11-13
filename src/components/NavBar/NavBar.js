import React from 'react';
import './NavBar.less';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/" className="logo-link">
                        <i className="ss ss-pmtg1"></i>
                    </a>
                </div>
                <div className="navbar-right">
                    <a href="/#/signup" className="btn btn--signup">Sign up</a>
                </div>
            </nav>
        )
    }
}

export default NavBar;
