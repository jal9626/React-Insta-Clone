import React from 'react';


import Post from './Post'



function PostContainer(props) {
  return (
    <div>
        {props.posts.map(post => 
            <Post
              post={post} 
              key={post.timestamp}
            />
          )}   
      </div> 
    );
}



export default PostContainer;