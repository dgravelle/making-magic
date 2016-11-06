import React from 'react';

class DeckView extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            sort: {}
        }
    }

    componentWillReceiveProps() {
        let currentSort = this.state;

        this.props.deckList.forEach(card => {
            card.types.forEach(i => {
                let type = i.toLowerCase();

                if (!currentSort.sort.hasOwnProperty(type))
                    currentSort.sort[type] = [];

                if(!currentSort.sort[type].includes(card))
                    currentSort.sort[type].push(card);
            });
        });

        this.setState(currentSort);
    }


    render() {
        let allCards = [];
        let types = this.state.sort;

        for (let type in types) {
            let cards = [];
            types[type].forEach(card => {
                cards.push(<li key={card.id}>{card.name}</li>);
            })

            allCards.push(
                <div key={type} className="accordion">
                    <div className="accordion-title">
                        <span>{type}</span>
                    </div>
                    <div className="accordion-title">
                        <ul>{cards}</ul>
                    </div>
                </div>
            );
        }

        return(
            <div className="deck-view-container">
                {allCards}
            </div>
        )
    }
}

export default DeckView;
