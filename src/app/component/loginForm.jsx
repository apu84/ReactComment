import React from 'react';
import {connect} from 'react-redux';
import {login, resetNotifications} from '../action/index'
import {withRouter} from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  cancel() {
    const {dispatch} = this.props;
    dispatch(resetNotifications());
    this.props.history.push('/');
  }

  login() {
    const {dispatch} = this.props;
    dispatch(login(this.refs.userName.value, this.refs.password.value));
    this.props.history.push('/');
  }

  render() {
    if (!this.props.loggedInUser) {
      return (
          <div className='form-group col-md-4'>
            <input className='form-control mb-3' ref='userName' type='text' placeholder='username'/>
            <input className='form-control mb-3' ref='password' type='password' placeholder='password'/>
            <button type='button' className='btn btn-primary' onClick={this.login.bind(this)}>Login</button>
            <button className='btn btn-secondary ml-1' onClick={this.cancel.bind(this)}>Cancel</button>
          </div>)
    }
    else {
      return (null);
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
    users: state.users,
  }
}

export default connect(mapStateToProps)(withRouter(LoginForm));