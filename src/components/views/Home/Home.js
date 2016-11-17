import React from 'react';
import NavBar from '../../NavBar/NavBar';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.showLock = this.showLock.bind(this);

    }

    showLock() {
        this.props.lock.show()
    }

    render() {
        return (
            <div>
                <NavBar showLock={this.showLock}/>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Home;
