import React from 'react';
import Accordion from '../Accordion/Accordion';
import './CardDisplay.less';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.add(this.props.card)
    }


    render() {
        const details = (
            <div className="card-info">
                <h3 className="card-info__name">  {this.props.card.name}</h3>
                <p className="card-info__text">{this.props.card.text}</p>
            </div>);

        return (
            <div className="card-container">
                <div className="card-img-container">
                    <img className="card-img" src={this.props.card.imageUrl} role="presentation"/>
                </div>
                <button className="add-card" onClick={this.handleClick}>+</button>
                <Accordion title="Details" content={details} />
            </div>

        )
    }
}

export default CardDisplay;
