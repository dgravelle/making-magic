import React from 'react';
import './Search.less';
import './ManaSymbols.less';
import '../../stylesheets/Mana-master/css/mana.css';

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
            <form id="search" className="card-search" name="search">
                <div className="form-group--search">
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
                        className="search-btn"
                        onClick={this.props.initSearch}
                        type="button"
                        value="Search"
                    />
                </div>
                <div className="search-options">
                    <div className="text-options-container">
                        <div className="form-group">
                            <label htmlFor="name"
                                className="text-options__label">
                                <input
                                    id="name"
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
                                    id="type"
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
                                    id="text"
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
                                    id="checkboxW"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="white"
                                />
                                <i className="ms ms-w"></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxU" className="mana-label">
                                <input
                                    id="checkboxU"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="blue"
                                />
                                <i className="ms ms-u"></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxB" className="mana-label">
                                <input
                                    id="checkboxB"
                                    name="checkboxB"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="black"
                                />
                                <i className="ms ms-b"></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxR" className="mana-label">
                                <input
                                    id="checkboxR"
                                    name="checkboxR"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="red"
                                />
                                <i className="ms ms-r"></i>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="checkboxG" className="mana-label">
                                <input
                                    id="checkboxG"
                                    name="checkboxG"
                                    className="mana-checkbox"
                                    onChange={this.props.toggleColor}
                                    type="checkbox"
                                    value="green"
                                />
                                <i className="ms ms-g"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;
