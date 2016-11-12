import React from 'react';
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
        return (
            <div className="card-container">
                <div className="img-container--card">
                    <img src={this.props.card.imageUrl} role="presentation"/>
                    <p>{this.props.imageUrl}</p>
                </div>
                <div className="card-info">
                    <h3 className="card-info__name">  {this.props.card.name}</h3>
                    <p className="card-info__text">{this.props.card.text}</p>

                </div>
                <div className="card-info__action">
                    <button className="add-card" onClick={this.handleClick}>+</button>
                </div>
            </div>
        )
    }
}

export default CardDisplay;
