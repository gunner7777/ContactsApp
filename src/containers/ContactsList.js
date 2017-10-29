import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getPerson, deletePerson } from '../actions';
import ConfirmWindow from '../components/ConfirmWindow';

class ContactsList extends Component {
  constructor() {
    super();
    
    this.state = {
      modalShow: false,
      delete: false,
      id: null
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDeletePerson = this.handleDeletePerson.bind(this);
  }

  //set this.state and delete contacts
  handleButtonClick(answer) {
    this.setState({
      modalShow: !this.state.modalShow,
      delete: answer
    }, () => {
      if(this.state.delete == 'true') {
        this.props.deletePerson(this.state.id);
      } 
    });
  }

  handleDeletePerson(id) {
    this.setState({
      modalShow: !this.state.modalShow,
      id
    });
  }

  render() {
    const { contacts } = this.props;
    const sp = contacts.map((contact, index) => {
      return (
        <li
          className="contacts__contact contact"
          key={contact.id}>
          <Link
            className="contact__link"
            to={`/p/${contact.id}`}
            onClick={() => this.props.getPerson(contact)}>
            {contact.firstName} {contact.lastName}
          </Link>
          <span className="contact__controls">
          <Link
            className="button contact__edit"
            to={`/p/${contact.id}/:edit`}
            onClick={() => this.props.getPerson(contact)}>
            Edit
          </Link>
          <button
            className="button contact__delete"
            onClick={() => this.handleDeletePerson(contact.id)}
          >
            Delete
          </button>
          </span>
        </li>
      );
    });

    return (
      <div>
        <ul>
          {sp}
        </ul>
        <ConfirmWindow isShow={this.state.modalShow} getConfirm={this.handleButtonClick} />
      </div>
    );    
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPerson: bindActionCreators(getPerson, dispatch),
    deletePerson: bindActionCreators(deletePerson, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);