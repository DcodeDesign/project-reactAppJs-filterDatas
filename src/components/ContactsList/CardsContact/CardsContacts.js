import React from 'react';
import './CardsContacts.css';
import {Card} from "./Cards/Card";

export function CardsContacts ({contacts, searchText}) {
    const cards = [];
    let i = 0;
    Object.values(contacts).forEach(contact => {
        if(contact.name.indexOf(searchText) === -1) {
            return
        }

        cards.push(
                <Card key={i++} contact={contact}/>);
        }
    )

    return (
        <React.Fragment>
            {cards}
        </React.Fragment>
    )
}

