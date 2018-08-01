import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login, logout} from '../action/index'
import {Link} from 'react-router-dom';

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
    this.props.login(this.refs.userName.value, this.refs.password.value, this.props.users);
    this.setState({
      showLoginForm: false
    });
  }

  render() {
    if (!this.props.loggedInUser) {
      return (
          <div className='form-group col-md-6'>
            <input className='form-control mb-3' ref='userName' type='text'/>
            <input className='form-control mb-3' ref='password' type='password'/>
            <button type='button' className='btn btn-primary' onClick={this.login.bind(this)}>Login</button>
            <Link className='btn btn-secondary ml-1' to='/'>Cancel</Link>
          </div>)
    }else {
      return (<div></div>);
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    users: state.users
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    login: login,
    logout: logout
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);