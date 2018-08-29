import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import uuid from 'uuid';

export default class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault(); // to stop submitting to actual file
    const { name, email, phone } = this.state;

    const newContact = {
      id: uuid(), // will generate a unique id for us
      name, // same as name: name, useful if key value same name
      email,
      phone
    };

    // we want to pass in a 'type' and 'payload'
    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    // clear state on submit
    this.setState({
      name: '',
      email: '',
      phone: ''
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value }); // e.g. name: e.target.value

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value; // have access to dispatch now we have access to actions
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
