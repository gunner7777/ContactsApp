import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactCard from '../components/ContactCard';
import { redirectToMain } from '../modules/redirectToMain';

class ContactView extends Component {
  componentDidMount() {
    redirectToMain(this.props.contact, this.props.history);
  }

  render() {
    const {firstName, lastName, phone, email } = this.props.contact;

    return (
      <div>
        <ContactCard 
          firstname={firstName}
          lastname={lastName}
          email={email}
          phone={phone}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contact
  }
}

export default connect(mapStateToProps)(ContactView);