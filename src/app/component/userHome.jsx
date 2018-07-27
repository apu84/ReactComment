import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addUser} from '../action/index'
import LoginForm from "./loginForm";

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false
    };
  }

  render() {
    return (<LoginForm/>)
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

export default connect(mapStateToProps, matchDispatchToProps)(UserHome);

