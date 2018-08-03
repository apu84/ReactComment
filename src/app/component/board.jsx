import React from 'react'
import Comment from './comment'
import {connect} from 'react-redux';
import {editComment, getAllComments, getLoggedInUser} from "../action";

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getLoggedInUser());
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
              <h6 className='pb-2 mb-0 d-inline'>Recent comments</h6>
               <div className='edit-icons d-inline ml-1'>
                 <i className='fa fa-plus-circle' onClick={this.add.bind(this)}></i>
               </div>
            </div>
            {this.props.comments.map((comment, index) => {
              return (<Comment key={index}
                               index={this.props.comments.length - 1 - index}
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
    }
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    loggedInUser: state.loggedInUser
  }
}

export default connect(mapStateToProps)(Board);