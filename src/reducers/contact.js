import { GET_PERSON } from '../actions';

const contact = (state={}, action) => {
  switch(action.type) {
    case GET_PERSON:
      return action.person;

    default: return state;

  }
}

export default contact;