import React, {PropTypes as T} from 'react'
import NavBar from '../../components/NavBar/NavBar';

export class Container extends React.Component {
    static contextTypes = {
        router: T.object
    }

    render() {
        let children = null;

        if (this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth //sends auth instance to children
            })
        }

        return (
            <main>
                <NavBar auth={this.props.route.auth} /> 
                {children}
            </main>
        )
    }
}

export default Container;
