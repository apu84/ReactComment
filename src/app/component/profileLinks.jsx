import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ProfileLinks extends React.Component {
  render() {
    if (!this.props.loggedInUser) {
      return (
          <div className='p-3'>
            <Link to='/login'>Login</Link>
            <Link to='/registration' className='ml-2'>Registration</Link>
          </div>);
    }
    else {
      return (null);
    }
  }
}

function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  }
}

export default connect(mapStateToProps)(ProfileLinks);