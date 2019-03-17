import React from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
      <div>
        <div>
          <div>
            <img className='thumbnail' src={props.post.thumbnailUrl} alt=''/>
            {props.post.username}
          </div>
          <div>
            <img src={props.post.imageUrl} alt=''/>
          </div>
          <p>{props.post.likes} likes</p>
        </div>  
        <CommentSection comment={props.post.comments} />
      </div>
    );
}

export default PostContainer;