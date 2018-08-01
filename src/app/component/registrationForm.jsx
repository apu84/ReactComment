import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser} from '../action/index'
import {Link} from 'react-router-dom';

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
    if (!this.props.loggedInUser) {
      return (
          <div className='form-group col-md-6'>
            <input className='form-control mb-3' ref='userName' type='text'/>
            <input className='form-control mb-3' ref='password' type='password'/>
            <button className='btn btn-primary' onClick={this.addUser.bind(this)}>Register</button>
            <Link className='btn btn-secondary ml-1' to='/'>Cancel</Link>
          </div>)
    }
    else if (this.props.loggedInUser) {
      return (<div></div>);
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