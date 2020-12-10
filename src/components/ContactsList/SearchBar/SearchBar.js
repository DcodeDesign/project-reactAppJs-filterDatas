import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFieldSearch = this.handleFieldSearch.bind(this);
    }

    handleFieldSearch (e){
        this.props.onhandleFieldSearch(e.target.value)
    }

    render() {
        return (
            <React.Fragment>
                <input type={"text"} name={"search"} value={this.props.searchText} onChange={this.handleFieldSearch} />
            </React.Fragment>)
    }
}


