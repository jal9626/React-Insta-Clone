import React from 'react';

import Comment from './Comment';

function CommentSection(props) {
    return (
      <div>
        <div>
            {console.log(props)}
            {props.comment.map((comment, index) => 
            <Comment username={comment.username} text={comment.text} key={index} />
            )}
        </div>
        <input></input>
      </div>  
    );
}

export default CommentSection;