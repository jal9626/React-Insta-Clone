
import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <form className="login-form">
        <h3>Welcome to React Insta Clone</h3>
        <div>Please Login</div>
        <b4-form-group>
          <input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </b4-form-group>
        <div class="form-group">
          <label for=""></label>
          <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" class="text-muted">Help text</small>
        </div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <b4-button color="success" size="large" onClick={this.handleLoginSubmit}>
            Log In
          </b4-button>
      </form>
    );
  }
}

export default Login;