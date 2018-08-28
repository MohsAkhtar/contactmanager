import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@email.com',
        phone: '1234567890'
      },
      {
        id: 2,
        name: 'Emma Wail',
        email: 'ewail@email.com',
        phone: '111111110'
      },
      {
        id: 3,
        name: 'Jack Fletcher',
        email: 'jfletcher@email.com',
        phone: '123412340'
      }
    ]
  };

  render() {
    // destructuring and pulling out contacts from state
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
