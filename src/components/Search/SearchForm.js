import React from 'react';
import './search.scss';
import '../../stylesheets/Mana-master/css/mana.css';

var ManaIcon = function() {
    this.borderRadius = '50%';
    this.color = 'black';
    this.padding = '4px';
    this.transition = 'transition: all .2s ease-in-out';
    this.display = 'inline';
    this.marginTop = '8px';
}

const white = new ManaIcon();
white.background = 'rgb(248, 246, 216)';


const blue = new ManaIcon();
blue.background = 'rgb(193, 215, 233)';

const black = new ManaIcon();
black.background = 'rgb(186, 177, 171)';

const red = new ManaIcon();
red.background = 'rgba(228,153,119,1)';

const green = new ManaIcon();
green.background = 'rgba(172,211,172,1)';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.inputChange = this.inputChange.bind(this);

        this.state = {
            value: ''
        }
    }

    inputChange(e) {
        this.props.handleTextQuery(e.target.value);
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <form id="search" className="search" name="search">
                <div className="form-group">
                    <label htmlFor="searchText" className="sr-only">
                        Enter search terms
                    </label>
                    <input
                        id="searchText"
                        className="search-input"
                        onChange={this.inputChange}
                        type="text"
                        value={this.state.value}
                    />

                    <input
                        id="searchBtn"
                        className="btn btn--search"
                        onClick={this.props.initSearch}
                        type="button"
                        value="Search"
                    />
                </div>
                <div className="searchOptions">
                    <div className="text-options-container">
                        <div className="form-group">
                            <label htmlFor="name" className="text-options__label">
                                <input
                                    className="text-options__checkbox"
                                    onChange={this.props.handleTextOptions}
                                    type="checkbox"
                                    value="name"
                                />
                                Name
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type" className="text-options__label">
                                <input
                                    className="text-options__checkbox"
                                    onChange={this.props.handleTextOptions}
                                    type="checkbox"
                                    value="type"
                                />
                                Type
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="text" className="text-options__label">
                                <input
                                    className="text-options__checkbox"
                                    onChange={this.props.handleTextOptions}
                                    type="checkbox"
                                    value="text"
                                />
                                Text
                            </label>
                        </div>
                    </div>
                    <div className="colors-container">
                        <div className="form-group">
                            <label htmlFor="checkboxW" className="mana-label">
                                <input
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="white"
                                />
                                <i className="ms ms-w" style={white}></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxU" className="mana-label">
                                <input
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="blue"
                                />
                                <i className="ms ms-u" style={blue}></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxB" className="mana-label">
                                <input
                                    name="checkboxB"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="black"
                                />
                                <i className="ms ms-u" style={black}></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxR" className="mana-label">
                                <input
                                    name="checkboxR"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="red"
                                />
                                <i className="ms ms-r" style={red}></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxR" className="mana-label">
                                <input
                                    name="checkboxG"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="green"
                                />
                                <i className="ms ms-g" style={green}></i>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;
