import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser, registrationError, resetNotifications} from '../action/index'
import {withRouter} from 'react-router-dom'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  login() {
    this.props.resetNotifications();
    this.props.history.push('/login');
  }

  cancel() {
    this.props.resetNotifications();
    this.props.history.push('/');
  }

  addUser() {
    if (this.refs.firstName.value === '') {
      this.props.registrationError('First name can not be empty');
    }
    else if (this.refs.lastName.value === '') {
      this.props.registrationError('Last name can not be empty');
    }
    if (this.refs.userName.value === '') {
      this.props.registrationError('User name can not be empty');
    }
    else if (this.refs.password.value === '') {
      this.props.registrationError('Password can not be empty');
    }
    else if (this.refs.password.value !== this.refs.retypepassword.value) {
      this.props.registrationError('Password doesn\'t match');
    }
    else {
      this.props.addUser(
          this.refs.firstName.value,
          this.refs.lastName.value,
          this.refs.userName.value,
          this.refs.password.value);
    }
  }

  render() {
    if (!this.props.loggedInUser) {
      if(!this.props.notifications
          || (this.props.notifications.type === 'registration' && !this.props.notifications.success)) {
        return (
            <div className='form-group col-md-4'>
              <input className='form-control mb-3' ref='firstName' type='text' placeholder='First name'/>
              <input className='form-control mb-3' ref='lastName' type='text' placeholder='Last name'/>
              <input className='form-control mb-3' ref='userName' type='text' placeholder='username'/>
              <input className='form-control mb-3' ref='password' type='password' placeholder='password'/>
              <input className='form-control mb-3' ref='retypepassword' type='password' placeholder='Retype password'/>
              <button className='btn btn-primary' onClick={this.addUser.bind(this)}>Register</button>
              <button className='btn btn-secondary ml-1' to='/' onClick={this.cancel.bind(this)}>Cancel</button>
            </div>);
      }
      else {
        return (<div className='p-3'><button className='btn btn-primary ml-1' onClick={this.login.bind(this)}>Login</button></div>);
      }
    }
    else if (this.props.loggedInUser) {
      return (null);
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    notifications: state.notifications
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser: addUser,
    resetNotifications: resetNotifications,
    registrationError: registrationError
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(RegistrationForm));