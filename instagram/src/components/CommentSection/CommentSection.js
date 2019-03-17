import React from 'react';

import Comment from './Comment';

function CommentSection(props) {
    return (
      <div>
        <div>
            {console.log(props)}
            {props.comment.map((comment) => 
            <Comment username={comment.username} text={comment.text} id={comment.id} key={comment.id} />
            )}
        </div>
        <form onSubmit={props.handleFormSubmit}>
          <input 
            type='text' 
            name='comment'
            value={props.value}
            onChange={props.handleInputChange}
            placeholder='Add a comment...'
          />
          <button type='submit'>Post</button>
        </form>
      </div>  
    );
}

export default CommentSection;