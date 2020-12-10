import React from 'react';
import './Card.css';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.contact = this.props.contact;
    }

    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{ this.contact.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{ this.contact.email}</h6>
                        <p className="card-text">{ this.contact.company.name}</p>
                    </div>
                </div>
                <hr />
            </React.Fragment>
        )
    }
}

