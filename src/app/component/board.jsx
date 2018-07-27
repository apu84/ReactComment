import React from 'react'
import Comment from './comment'
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {addComment} from "../action";

class Board extends React.Component {

  constructor(props) {
    super(props);
  }

  add() {
    this.props.addComment();
  }

  updateComments(comments) {
    this.setState({
      comments: comments
    });
  }

  render() {
    return (
        <div className='my-3 p-3 bg-white rounded box-shadow'>
          <div className='border-bottom border-gray'>
            <h6 className='pb-2 mb-0'>Recent comments</h6>
            <button className='btn btn-primary' onClick={this.add.bind(this)}>Add comment</button>
          </div>
          {this.props.comments.map((comment, index) => {
            return (<Comment key={index}
                             index={index}
                             content={comment}/>)
          })}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addComment: addComment
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Board);