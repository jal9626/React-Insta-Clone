import React from 'react';

import PostContainer from './PostContainer'; 


function PostPage(props) {
    console.log(props)
    return (
      <div>
          <PostContainer posts={
            props.filteredPosts.length > 0
             ? props.filteredPosts
             : props.posts.posts
          }/>
      </div>
    )
} 

export default PostPage;