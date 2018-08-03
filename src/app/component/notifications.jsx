import React from 'react';
import {connect} from 'react-redux';
import {logout, resetNotifications} from '../action/index'
import {withRouter} from 'react-router-dom'

class Notifications extends React.Component {
  render() {
    if (this.props.notifications) {
      switch (this.props.notifications.type) {
        case 'login':
          if (this.props.notifications.success) {
            return this.loginSuccess(this.props.notifications.user);
          }
          else {
            return this.loginError(this.props.notifications.text);
          }
        case 'registration':
          if (this.props.notifications.success) {
            return this.registrationSuccess(this.props.notifications.text);
          }
          else {
            return this.registrationError(this.props.notifications.text);
          }
      }
    }
    else {
      return (null);
    }
  }

  logout() {
    const {dispatch} = this.props;
    dispatch(logout(this.props.loggedInUser.username));
    dispatch(resetNotifications());
    this.props.history.push('/');
  }

  loginSuccess(user) {
    return (
        <div className='p-3'>
          <i className='fa fa-user-circle-o'></i>
          <small className='ml-1 text-muted'>{user.firstName} {user.lastName}</small>
          <div className='edit-icons float-right' onClick={this.logout.bind(this)}> <i className='fa fa-sign-out' title='Sign out'></i></div>
        </div>
    );
  }

  loginError(error) {
    return (
        <div className='p-3'>
          <span className='alert alert-danger'>
            {error}
          </span>
        </div>
    );
  }

  registrationSuccess(text) {
    return (
        <div className='p-3'>
          <span className='alert alert-success'>
            {text}
          </span>
        </div>
    );
  }

  registrationError(text) {
    return (
        <div className='p-3'>
          <span className='alert alert-danger'>
            {text}
          </span>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notifications: state.notifications,
    loggedInUser: state.loggedInUser
  }
}

export default connect(mapStateToProps)(withRouter(Notifications));