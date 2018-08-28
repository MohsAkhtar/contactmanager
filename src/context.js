import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
