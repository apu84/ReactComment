import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editComment, removeComment, getAllComments} from '../action/index'

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  edit() {
    this.setState({
      editing: true
    });
  }

  cancel() {
    this.setState({
      editing: false
    });
    if (this.refs.newText.value === '') {
      this.props.removeComment(this.props.loggedInUser, this.props.index);
    }
    this.props.getAllComments();
  }

  save() {
    this.props.editComment(this.props.loggedInUser, this.refs.newText.value, this.props.index);
    this.setState({
      editing: false
    });
  }

  remove() {
    this.props.removeComment(this.props.index);
  }

  isLoggedIn() {
    return this.props.loggedInUser;
  }

  render() {
    if ((this.state.editing || this.props.content.text === '') && this.isLoggedIn()) {
      return (
          <div className='text-muted pt-3 border-bottom border-gray'>
            <div className='form-row'>
              <div className='col-md-12'>
                <textarea ref='newText' className='form-control mb-3' defaultValue={this.props.content.text}></textarea>
              </div>
            </div>
            <button type="button" className="btn btn-success" onClick={this.save.bind(this)}>Save</button>
            <button type="button" className="btn btn-dark ml-1" onClick={this.cancel.bind(this)}>Cancel</button>
          </div>);
    }
    else if (!this.state.editing) {
      if (this.isLoggedIn() && this.props.content.user.id === this.props.loggedInUser.id) {
        return (
            <div className='text-muted pt-3 border-bottom border-gray'>
              <p className='pb-3 mb-0 small lh-125'>{this.props.content.text}</p>
              <span className='badge badge badge-info'>{this.props.content.user.firstName} {this.props.content.user.lastName}</span>
              <span className='badge badge badge-secondary ml-2'>{this.props.content.timestamp}</span>
              <div>
                <button type="button" className="btn btn-secondary" onClick={this.edit.bind(this)}>Edit</button>
                <button type="button" className="btn btn-danger ml-1" onClick={this.remove.bind(this)}>Remove</button>
              </div>
            </div>);
      }
      else {
        return (
            <div className='text-muted pt-3 border-bottom border-gray'>
              <p className='pb-3 mb-0 small lh-125'>{this.props.content.text}</p>
              <span className='badge badge badge-info'>{this.props.content.user.firstName} {this.props.content.user.lastName}</span>
              <span className='badge badge badge-secondary ml-2'>{this.props.content.timestamp}</span>
            </div>);
      }
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
    editComment: editComment,
    removeComment: removeComment,
    getAllComments: getAllComments
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Comment);

