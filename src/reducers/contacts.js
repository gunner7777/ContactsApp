import { SHOW_ALL, UPDATE_PERSON, DELETE_PERSON } from '../actions';

const initialState = [
  {
    id: 1,
    firstName: "Harry",
    lastName: "Kane",
    phone: "877890",
    email: "Kane@epl.com"
  }, 
  {
    id: 2,
    firstName: "Sergio",
    lastName: "Agüero",
    phone: "877444",
    email: "Agüero@epl.com"
  }, 
  {
    id: 3,
    firstName: "Romelu",
    lastName: "Lukaku",
    phone: "877844",
    email: "Lukaku@epl.com"
  }, 
  {
    id: 4,
    firstName: "Raheem",
    lastName: "Sterling",
    phone: "875566",
    email: "Sterling@epl.com"
  }, 
  {
    id: 5,
    firstName: "Gabriel",
    lastName: "Jesus",
    phone: "834590",
    email: "Jesus@epl.com"
  }, 
  {
    id: 6,
    firstName: "Álvaro",
    lastName: "Morata",
    phone: "877324",
    email: "Morata@epl.com"
  }, 
  {
    id: 7,
    firstName: "Alexandre",
    lastName: "Lacazette",
    phone: "877592",
    email: "Lacazette@epl.com"
  }
];

const contacts = (state=initialState, action) => {
  switch(action.type) {
    case SHOW_ALL:
      return state;

    case UPDATE_PERSON:
      return state.map((item) => {
        if(item.id === action.person.id) {
          return action.person;
        } else {
          return item;
        }
      });

    case DELETE_PERSON:
      return state.filter((item) => {
        return item.id !== action.id;
      });
      
    default: return state;
  }
}

export default contacts;