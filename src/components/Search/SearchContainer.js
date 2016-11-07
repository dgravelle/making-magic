import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggleColor = this.toggleColor.bind(this);
        this.initSearch = this.initSearch.bind(this);
        this.handleTextQuery = this.handleTextQuery.bind(this);
        this.handleTextOptions = this.handleTextOptions.bind(this);

        this.state = {
            colors: {
                white: false,
                blue: false,
                black: false,
                red: false,
                green: false
            },
            textOptions: {
                name: false,
                type: false,
                text: false
            },
            query: '',
            results: []
        }
    }

    handleTextQuery(value) {
        let newState = this.state
        newState.query = value;

        this.setState(newState);
    }

    handleTextOptions(e) {
        let opt = e.target.value
        let newState = this.state

        newState.textOptions[opt] = !newState.textOptions[opt];

        this.setState(newState);
    }

    toggleColor(e) {
        let val = e.target.value;
        let currentState = this.state;

        currentState.colors[val] = !currentState.colors[val];

        this.setState(currentState);
    }

    initSearch(e) {
        e.preventDefault();

        let colors = this.state.colors;
        let textOptions = this.state.textOptions;
        let colorQuery = '';
        let textOptionsQuery = '';

        for (let i in colors) {
            if (colors.hasOwnProperty(i)) {
                if (colors[i]) {
                    if (colorQuery.length > 0) {
                        colorQuery += `,${i}`;
                    }
                    else {
                        colorQuery = `${i}`;
                    }
                }
            }
        }


        for (let i in textOptions) {
            if (textOptions.hasOwnProperty(i)) {
                if(textOptions[i]) {
                    textOptionsQuery += `&${i}=${this.state.query}`;
                }
            }
        }

        let apiUrl = `https://api.magicthegathering.io/v1/cards?colors="${colorQuery}"${textOptionsQuery}`;

        axios.get(apiUrl).then(cards => {
            var results = [];

            cards.data.cards.forEach(card => {

                results.push(card);

            });

            this.setState({ results: results });
        });
    }

    render() {
        return(
            <div id="searchContainer" className="search-container">
                <SearchForm
                    initSearch={this.initSearch}
                    toggleColor={this.toggleColor}
                    handleTextQuery={this.handleTextQuery}
                    handleTextOptions={this.handleTextOptions}
                />
                <SearchResults
                    add={this.props.addToDeck}
                    results={this.state.results}
                />
            </div>
        )
    }
}

export default SearchContainer;
