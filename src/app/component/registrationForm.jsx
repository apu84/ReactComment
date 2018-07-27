import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser} from '../action/index'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRegistrationForm: false
    };
  }

  showRegistrationForm() {
    this.setState({
      showRegistrationForm: true
    });
  }

  cancel() {
    this.setState({
      showRegistrationForm: false
    });
  }

  addUser() {
    this.props.addUser(this.refs.userName.value, this.refs.password.value);
    this.setState({
      showRegistrationForm: false
    });
  }

  render() {
    if (!this.state.showRegistrationForm && !this.props.loggedInUser) {
      return (<a href='javascript:void(0)' onClick={this.showRegistrationForm.bind(this)}>Register</a>);
    }
    else if (this.state.showRegistrationForm) {
      return (
          <div className='form-group col-md-6'>
            <input className='form-control mb-3' ref='userName' type='text'/>
            <input className='form-control mb-3' ref='password' type='password'/>
            <button className='btn btn-primary' onClick={this.addUser.bind(this)}>Register</button>
            <button className='btn btn-secondary' onClick={this.cancel.bind(this)}>Cancel</button>
          </div>)
    }
    else if (this.props.loggedInUser) {
      return(<div></div>);
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
    addUser: addUser
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(RegistrationForm);