import React from "react";

function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <h1>Name: {props.contact.name}</h1>
      <h2>Job: {props.contact.job}</h2>
    </div>
  );
}

export default ContactCard;
