import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ProfileLinks extends React.Component {
  render() {
    if (!this.props.loggedInUser) {
      return (
          <div>
            <Link to='/login'>Login</Link>
            <Link to='/registration' className='ml-1'>Registration</Link>
          </div>);
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser,
  }
}

export default connect(mapStateToProps)(ProfileLinks);