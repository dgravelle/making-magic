import React from 'react';
// import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
const mtg = require('mtgsdk');

class SearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.toggleColor = this.toggleColor.bind(this);
        this.initSearch = this.initSearch.bind(this);
        this.handleTextQuery = this.handleTextQuery.bind(this);
        this.handleTextOptions = this.handleTextOptions.bind(this);
        this.processColorQuery = this.processColorQuery.bind(this);
        this.processTextQuery = this.processTextQuery.bind(this);

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

    processColorQuery() {
        let colors = this.state.colors;
        let colorQuery = '';

        for (let i in colors) {
            if (colors.hasOwnProperty(i)) {
                if (colors[i]) {
                    if (colorQuery.length > 0) {
                        console.log(colorQuery);
                        let temp = colorQuery.substr(colors[i]);
                        temp = temp.slice(0,temp.length - 1);

                        colorQuery = temp;
                        colorQuery = `"${temp},${i}"`;

                    }
                    else {
                        colorQuery = `"${i}"`;
                    }
                }
            }
        }
        console.log(colorQuery);
        return colorQuery;
    }

    processTextQuery() {
        let textOptions = this.state.textOptions;

        for (let i in textOptions) {
            if (textOptions.hasOwnProperty(i)) {
                if(textOptions[i]) {
                    let result = {};

                    result[`${i}`] = this.state.query;

                    return result;
                }
            }
        }


    }

    initSearch(e) {
        e.preventDefault();

        let colors = this.processColorQuery();
        let textOptions = this.processTextQuery();
        let textOptionsKey = '';
        let fullQuery = {}

        if (textOptions) {
            textOptionsKey = Object.keys(textOptions)[0];
            fullQuery = {
                [textOptionsKey] : textOptions[textOptionsKey],
                colors: colors
            }
        }
        else {
            fullQuery = {
                colors: colors
            }
        }

        mtg.card.where(fullQuery)
            .then(cards => {
                var results = [];

                cards.forEach(card => {
                    // console.log(card);
                    if(card.imageUrl)
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
