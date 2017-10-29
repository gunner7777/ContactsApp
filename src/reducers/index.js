import { combineReducers } from 'redux';
import contacts from './contacts';
import contact from './contact';


const contactsApp = combineReducers({
  contacts: contacts,
  contact: contact
});

export default contactsApp;