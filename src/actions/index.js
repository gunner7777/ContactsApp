export const SHOW_ALL = "SHOW_ALL";
export const GET_PERSON = "GET_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";


export const showContacts = (contacts) => {
  return {
    type: SHOW_ALL,
    contacts
  }
}

export const getPerson = (person) => {
  return {
    type: GET_PERSON,
    person
  }
}

export const updatePerson = (person) => {
  return {
    type: UPDATE_PERSON,
    person
  }
}

export const deletePerson = (id) => {
  return {
    type: DELETE_PERSON,
    id
  }
}