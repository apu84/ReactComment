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

  render() {
    if (this.state.editing || this.props.content.text === '') {
      return (
          <div className='media text-muted pt-3 border-bottom border-gray'>
            <div className='form-row'>
              <div className='col-md-12'>
                <textarea ref='newText' className='form-control' defaultValue={this.props.content.text}></textarea>
              </div>
            </div>
            <button type="button" className="btn btn-success" onClick={this.save.bind(this)}>Save</button>
          </div>);
    }
    else if (!this.state.editing) {
      return (
          <div className='media text-muted pt-3 border-bottom border-gray'>
            <p className='media-body pb-3 mb-0 small lh-125'>{this.props.content.text}</p>
            <div>
              <button type="button" className="btn btn-secondary" onClick={this.edit.bind(this)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={this.remove.bind(this)}>Remove</button>
            </div>
          </div>);
    }
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    editComment: editComment,
    removeComment: removeComment
  }, dispatch);
}

export default connect(() => {
  return {}
}, matchDispatchToProps)(Comment);

