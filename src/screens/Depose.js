import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { setToken } from '../utils/authManager';

export class Depose extends Component {
  state = {
    username: '',   
    password: '',
    loading: false,
    redirectToReferer: false
  };

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ loading: true });
    event.preventDefault();
    this.setState({ username: '', password: '' });
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        user: this.state.username,
        pass: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        setToken(data.token);
        this.setState({ redirectToReferer: true });
      })
      .catch(err => console.error(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const from = (this.props.location.state &&
      this.props.location.state.from) || { pathname: '/' };
    console.log(this.props.location.state);
    if (this.state.redirectToReferer) return <Redirect to={from} />;

    return (
      <div id="wrapper">
        <h1>Expandable Search Form</h1>
        <input type="search" placeholder="Search"></input>
        <input id="saveForm" name="saveForm" type="submit" value="Submit"></input>
        
      </div>
    );
  }
}
