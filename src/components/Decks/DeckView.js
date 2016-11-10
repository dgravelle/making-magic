import React from 'react';
import Accordion from '../Accordion/Accordion';
import './DeckView.less';

class DeckView extends React.Component {
    constructor(props) {
        super(props)

        this.toggleEl = this.toggleEl.bind(this);

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

    toggleEl(el) {
        console.log(el.target.class);
    }


    render() {
        let allCards = [];
        let types = this.state.sort;

        for (let type in types) {
            let cards = [];
            types[type].forEach(card => {
                cards.push(<li key={card.id}>{card.name}</li>);
            })

            let cardList = (<ul>{cards}</ul>);

            allCards.push(
                <Accordion key={type} title={type} content={cardList} />
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
