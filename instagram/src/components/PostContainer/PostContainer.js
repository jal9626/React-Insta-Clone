import React from 'react';
import PropTypes from 'prop-types';

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
        <CommentSection 
          comment={props.post.comments} 
          handleInputChange={props.inputChangeHandler}
          handleFormSubmit={props.formSubmitHandler}
          value={props.value}
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