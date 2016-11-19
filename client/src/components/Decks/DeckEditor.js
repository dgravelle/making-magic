import React from 'react';
import SearchContainer from '../Search/SearchContainer.js';
import DeckView from './DeckView.js';
import DeckStats from './DeckStats.js';


class DeckEditor extends React.Component {
    constructor() {
        super()

        this.state = {
            deckList: []
        }

        this.add = this.add.bind(this);
        this.checkForDoubles = this.isCardDupe.bind(this);

    }

    isCardDupe(card) {
        let newState = this.state;

        if (newState.deckList.length < 1)
            return false;

        let deckList = this.state.deckList;
        let dupe = false;

        for (var i = 0; i < deckList.length; i++) {
            if(card.id === deckList[i].id) {
                dupe = true;
                return dupe
            }
        }

        return dupe;
    }

    add(card) {
        let newState = this.state;
        if (!this.isCardDupe(card)) {
            newState.deckList.push(card);
            this.setState(newState);
        }
        else {
            alert(`you've already got ${card.name} in your deck.`)
        }
    }

    render() {
        return(
            <div className="deckbuilder-container">
                <section className="col-3">
                    <SearchContainer
                        addToDeck={this.add}
                        />
                </section>
                <section className="col-3">
                    <DeckView
                        deckList={this.state.deckList}
                        />
                </section>
                <section className="col-3">
                    <DeckStats cards={this.state.deckList} />
                </section>
            </div>
        )
    }

}

export default DeckEditor;
