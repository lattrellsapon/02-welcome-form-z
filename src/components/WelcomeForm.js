import React, { Component } from 'react';
import axios from 'axios';

export class WelcomeForm extends Component {
  state = {
    username: '',
    email: '',
    message: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('Submitting form');
    axios({
      method: 'POST',
      url: '/send',
      data: {
        username: this.state.username,
        email: this.state.email,
        message: this.state.message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Message sent.');
      } else if (response.data.msg === 'fail') {
        alert('Message failed.');
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome Form</h1>
        <form method='POST' onSubmit={this.onSubmit}>
          <input
            type='text'
            name='username'
            placeholder='Full name . . .'
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type='email'
            name='email'
            placeholder='Email address . . .'
            value={this.state.email}
            onChange={this.onChange}
          />
          <br />
          <br />
          <textarea
            name='message'
            placeholder='Enter your message here . . .'
            value={this.state.message}
            onChange={this.onChange}
          ></textarea>
          <br />
          <br />
          <input type='submit' value='SUBMIT' className='submit-button' />
        </form>
      </div>
    );
  }
}

export default WelcomeForm;
