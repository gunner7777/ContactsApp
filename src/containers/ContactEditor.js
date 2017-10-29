import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContactCard from '../components/ContactCard';
import { updatePerson } from '../actions';
import { redirectToMain } from '../modules/redirectToMain';

class ContactEditor extends Component {
  constructor() {
    super();
    this.state = {
      contact: {},
      done: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    redirectToMain(this.props.contact, this.props.history);

    const {id, firstName, lastName, phone, email } = this.props.contact;

    this.setState({
      contact: {
        id: id,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email
      }
    });
  }

  //check updates. No updates, no action
  componentWillReceiveProps(nextProps) {
    const now = nextProps.contacts.filter((contact) => {
      return this.props.contact.id === contact.id
    });
    const was = this.props.contacts.filter((contact) => {
      return this.props.contact.id === contact.id
    });

    if (JSON.stringify(now[0]) !== JSON.stringify(was[0])) {
      this.setState({
        done: true
      });
      setTimeout(() => {
       this.setState({
        done: false
      })
      }, 2000);
    }  
  }

  handleChange(event) {

    switch(event.target.id) {
      case "fname": this.setState({
          contact: {
            ...this.state.contact, firstName: event.target.value
          }
        });
        break;

      case "lname": this.setState({
          contact: {
            ...this.state.contact, lastName: event.target.value
          }
        });
        break;

      case "phone": this.setState({
          contact: {
            ...this.state.contact, phone: event.target.value
          }
        });
        break;

      case "email": this.setState({
          contact: {
            ...this.state.contact, email: event.target.value
          }
        });
        break;

      default: break;
    }
  }

  render() {
    let button = this.state.done ? 
      <button
        className="button button-big button-success">
        Done
      </button>
     : <button
          className="button button-big contacts-editor__button"
          onClick={() => this.props.updatePerson(this.state.contact)}>
          Edit
        </button>;
    
    return (
      <div className="contacts-editor">
        <p className="contacts-editor__position">
          <label htmlFor="fname">First name</label><br/>
          <input
            id="fname"
            className="contacts-editor__input"
            type="text"
            onChange={this.handleChange}
            value={this.state.contact.firstName}
            placeholder="first name" />
        </p>
        <p className="contacts-editor__position">
          <label htmlFor="lname">Last name</label><br/>
          <input
            id="lname"
            className="contacts-editor__input"
            type="text"
            onChange={this.handleChange}
            value={this.state.contact.lastName}
            placeholder="last name" />
        </p>
        <p className="contacts-editor__position">
          <label htmlFor="phone">Phone</label><br/>
          <input
            id="phone"
            className="contacts-editor__input"
            type="text"
            onChange={this.handleChange}
            value={this.state.contact.phone}
            placeholder="phone" />
        </p>
        <p className="contacts-editor__position">
          <label htmlFor="email">Email</label><br/>
          <input
            id="email"
            className="contacts-editor__input"
            type="text"
            onChange={this.handleChange}
            value={this.state.contact.email}
            placeholder="email" />
        </p>

        {button}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contact,
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePerson: bindActionCreators(updatePerson, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);