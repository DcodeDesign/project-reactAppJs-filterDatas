import React from 'react';
import './App.css';

import {ContactsList} from "./ContactsList/ContactsList";

export class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <ContactsList />
        </React.Fragment>
    )
  }
}

