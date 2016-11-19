import React from 'react';
import CardDisplay from './CardDisplay.js';

class SearchResults extends React.Component {
    constructor(props) {
        super(props)

        this.addToDeck = this.addToDeck.bind(this);
    }

    addToDeck(card) {
        this.props.add(card);
    }

    render() {
        let results = [];

        return (
            <div className="results-container">
                {this.props.results.map(card => {
                    return (
                        <CardDisplay
                            key={card.id}
                            card={card}
                            add={this.addToDeck}
                        />
                    )
                })}
            </div>
        )
    }
}

export default SearchResults;
