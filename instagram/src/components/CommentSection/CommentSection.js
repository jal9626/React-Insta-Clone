import React, { Component } from 'react';

import Comment from './Comment';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }
 
 
 
  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value});
  }
  formSubmitHandler = (event, id) => {
    console.log('event is: ', event);
    console.log('id is: ', id);
    
    event.preventDefault();
    let newComment = { 
      
            username: 'me',
            text: this.state.comment,
            
    };

    this.state.instagram.map(post => {
      post.id === id ? this.setState(prevState => {
        return {
          instagram: [...prevState.instagram.comments, newComment]
        }
      })
       : console.log('no match, post is, id is', post.id, id);
    });

    // this.setState((prevState ) => {
    //   return {
    //     instagram: [...prevState.instagram, newComment],
    //     comment: '',
    //   };
    // });

  };
  
  render() {
  return (
      <div>
        <div>
            {this.state.comments.map((comment) => 
            <Comment username={comment.username} text={comment.text} id={comment.id} key={comment.id} />
            )}
        </div>
        <form onSubmit={this.formSubmitHandler}>
          <input 
            type='text' 
            name='comment'
            value={this.value}
            onChange={this.inputChangeHandler}
            placeholder='Add a comment...'
            // id={props.post.id}
          />
          <button type='submit'>Post</button>
        </form>
      </div>  
    );
  }
}
export default CommentSection;