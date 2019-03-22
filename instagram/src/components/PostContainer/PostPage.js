import React, {Component} from 'react';

import dummyData from '../../dummy-data';
import PostContainer from './PostContainer'; 
import SearchBar from '../SearchBar/SearchBar'; 


class PostPage extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        filteredPosts: [],
      };
    }
  
    componentDidMount() {
      this.setState({ posts: dummyData })
    }

    searchPostsHandler = e => {
      const posts = this.state.posts.filter(p => {
        if (p.username.includes(e.target.value)) {
          return p;
        }
      });
      this.setState({ filteredPosts: posts });
    };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            post={this.instagram} 
            searchPosts={this.searchPostsHandler}
            value={this.state.searchText}
          />
         <PostContainer 
           posts={
            this.state.filteredPosts.length > 0
             ? this.state.filteredPosts
             : this.state.posts
          }
         />
         

        </header>
      </div>
    );
  }
}

export default PostPage;
