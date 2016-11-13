import React from 'react';
import './Accordion.less';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/lib/md';


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
        let arrow = this.state.open ? (<MdArrowDropUp />) : (<MdArrowDropDown />)

        return (
            <div className="accordion">
                <div className="accordion-title" onClick={this.toggle}>
                    <span>{this.props.title}</span>
                    <span onClick={this.toggleEl}>
                        {arrow}
                    </span>
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
