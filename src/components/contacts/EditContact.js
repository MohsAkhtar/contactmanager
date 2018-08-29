import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  // gets data from the json site. Same method would be for db.
  async componentDidMount() {
    const { id } = this.props.match.params; // id in URL of user
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const contact = response.data;

    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault(); // to stop submitting to actual file
    const { name, email, phone } = this.state;

    // Check fields for errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return; // we need to stop state
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const updateContact = {
      name,
      email,
      phone
    };

    // pull id from params
    const { id } = this.props.match.params;

    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updateContact
    );

    dispatch({ type: 'UPDATE_CONTACT', payload: response.data });

    // clear state on submit
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    // redirect back to home
    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value }); // e.g. name: e.target.value

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value; // have access to dispatch now we have access to actions
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="email"
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Update Contact"
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

export default EditContact;
