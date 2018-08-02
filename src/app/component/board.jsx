import React from 'react'
import Comment from './comment'
import {connect} from 'react-redux';
import {editComment, getAllComments} from "../action";
import loggedInUser from "../reducers/loggedInUser";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getAllComments());
  }

  add() {
    const {dispatch} = this.props;
    dispatch(editComment(this.props.loggedInUser));
  }

  render() {
    if (this.props.loggedInUser) {
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
          </div>);
    }
    else {
      return (
          <div className='my-3 p-3 bg-white rounded box-shadow'>
            <div className='border-bottom border-gray'>
              <h6 className='pb-2 mb-0'>Recent comments</h6>
            </div>
            {this.props.comments.map((comment, index) => {
              return (<Comment key={index}
                               index={index}
                               content={comment}/>)
            })}
          </div>
      );
    };
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    loggedInUser: state.loggedInUser
  }
}

export default connect(mapStateToProps)(Board);