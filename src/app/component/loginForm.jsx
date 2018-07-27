import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login, logout} from '../action/index'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    };
  }

  showLoginForm() {
    this.setState({
      showLoginForm: true
    });
  }

  logout() {
    this.props.logout(this.props.loggedInUser.name);
  }

  cancel() {
    this.setState({
      showLoginForm: false
    });
  }

  login() {
    this.props.login(this.refs.userName.value, this.refs.password.value);
    this.setState({
      showLoginForm: false
    });
  }

  render() {
    if (!this.state.showLoginForm && !this.props.loggedInUser) {
      return (<a href='javascript:void(0)' onClick={this.showLoginForm.bind(this)}>Login</a>);
    }
    else if (this.state.showLoginForm) {
      return (
          <div className='form-group col-md-6'>
            <input className='form-control mb-3' ref='userName' type='text'/>
            <input className='form-control mb-3' ref='password' type='password'/>
            <button className='btn btn-primary' onClick={this.login.bind(this)}>Login</button>
            <button className='btn btn-secondary' onClick={this.cancel.bind(this)}>Cancel</button>
          </div>)
    }
    else if (this.props.loggedInUser) {
      return (<div><span className='badge badge-info'>Logged in as: {this.props.loggedInUser.name}</span> <a
          href='javascript:void(0)' onClick={this.logout.bind(this)}>Logout</a></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    login: login,
    logout: logout
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);