import React from 'react';
import './ContactsList.css';
import {CardsContacts} from "./CardsContact/CardsContacts";
import {SearchBar} from "./SearchBar/SearchBar";

export class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: '',
            searchText: ''
        }
        this.handleFieldSearchText = this.handleFieldSearchText.bind(this);
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

    handleFieldSearchText(searchText){
        this.setState({searchText});
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar
                    searchText={this.state.searchText}
                    onhandleFieldSearch={this.handleFieldSearchText}
                />
                <CardsContacts
                    contacts={this.state.contacts}
                    searchText={this.state.searchText}
                />
            </React.Fragment>
        )
    }
}

