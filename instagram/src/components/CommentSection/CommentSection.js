import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment';
import './CommentSection.css';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
      likes: props.likes
    };
  }
 
 
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value});
  }

  addNewComment = (event) => {
    event.preventDefault();
    let newComment = {   
            username: 'me',
            text: this.state.comment,      
    };

    let comments=this.state.comments.slice()
    comments.push(newComment);
    
    this.setState({
      comments, 
      comment: '',
    })

  };

  likeClick = () => {
    this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      };
    });
  }

 
  
  render() {
  return (
      <div className='commentSection'>
        
        <div className='heartContainer'>
          <p className='heart' onClick={this.likeClick}><FontAwesomeIcon icon={faHeart} /></p>
          <p><FontAwesomeIcon icon={faComment} /></p>
        </div>
        <p className='likes'>{this.state.likes} likes</p>
        
        <div>
            {this.state.comments.map((comment) => 
            <Comment username={comment.username} text={comment.text} id={comment.id} key={comment.id} />
            )}
        </div>
        
        
        <form onSubmit={this.addNewComment}>
          <input 
            type='text' 
            name='comment'
            value={this.value}
            onChange={this.inputChangeHandler}
            placeholder='Add a comment...'
          />
          <button type='submit'>Post</button>
        </form>
      </div>  
    );
  }
}
export default CommentSection;