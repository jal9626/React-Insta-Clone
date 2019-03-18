import React from 'react';
import PropTypes from 'prop-types';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
      <div className='postContainer'>
        <div>
          <div>
            <img className='thumbnail' src={props.post.thumbnailUrl} alt=''/>
            {props.post.username}
          </div>
          <div>
            <img className='postImage' src={props.post.imageUrl} alt=''/>
          </div>
          <p>{props.post.likes} likes</p>
        </div>  
        <CommentSection 
          comments={props.post.comments} 
          post={props.post}
        />
      </div>
    );
}

PostContainer.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  )
}

export default PostContainer;