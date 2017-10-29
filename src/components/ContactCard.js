import React from 'react';

const ContactCard = (props) => {
  return (
    <div className="contact-view">
      <p className="contact-view__info text-bold">{props.firstname} {props.lastname}</p>
      <p className="contact-view__info">tel.: {props.phone}</p>
      <p className="contact-view__info">email: {props.email}</p>
    </div>
  )
}

export default ContactCard;