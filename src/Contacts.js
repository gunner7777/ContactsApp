import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import './contacts.css';

class Contacts extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="contacts-app">
          <Header />
          <List />
        </div>
      </div>
    );
  }
}

export default Contacts;
