import React from 'react';
import './Accordion.less';

class Accordion extends React.Component {
    constructor() {
        super()

        this.state = {
            open: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        let closed = this.state.open ? '' : ' closed';

        return (
            <div className="accordion">
                <div className="accordion-title" onClick={this.toggle}>
                    <span>{this.props.title}</span>
                    <span className="toggle-caret" onClick={this.toggleEl}>&gt;</span>
                </div>
                <div className={`accordion-body ${closed}`}>
                    {this.props.content}
                </div>
            </div>
        )
    }
}

React.propTypes = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.element
}

export default Accordion;
