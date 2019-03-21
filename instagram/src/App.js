import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'; 
import SearchBar from './components/SearchBar/SearchBar';
import PostPage from './components/PostContainer/PostPage';


class App extends Component {
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
        <PostPage />

        </header>
      </div>
    );
  }
}

export default App;
