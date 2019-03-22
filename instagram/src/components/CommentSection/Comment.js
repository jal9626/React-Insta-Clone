import React from 'react';

function Comment(props) {
    return (
      <div>
        <div>
        {props.username} {props.text}
        </div>
      </div>    
    );
}

export default Comment;