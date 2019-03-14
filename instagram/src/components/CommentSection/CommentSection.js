import React from 'react';

import Comment from './Comment';

function CommentSection(props) {
    return (
      <div>
        <div>
            {/* {console.log(props)}; */}
            {props.comment.map(comment => 
            <Comment username={comment.username} text={comment.text}/>
            )}
        </div>
        <input></input>
      </div>  
    );
}

export default CommentSection;