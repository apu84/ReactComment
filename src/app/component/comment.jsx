import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editComment, removeComment} from '../action/index'

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

  save() {
    this.props.editComment(this.refs.newText.value, this.props.index);
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
          </div>);
    }
    else if (!this.state.editing) {
      if (this.isLoggedIn()) {
        return (
            <div className='text-muted pt-3 border-bottom border-gray'>
              <p className='pb-3 mb-0 small lh-125'>{this.props.content.text}</p>
              <div>
                <button type="button" className="btn btn-secondary" onClick={this.edit.bind(this)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={this.remove.bind(this)}>Remove</button>
              </div>
            </div>);
      }
      else {
        return (
            <div className='media text-muted pt-3 border-bottom border-gray'>
              <p className='media-body pb-3 mb-0 small lh-125'>{this.props.content.text}</p>
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
    removeComment: removeComment
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Comment);

