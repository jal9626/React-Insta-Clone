import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'; 
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
    constructor() {
      super();
      this.state = {
        instagram: [],
        searchText: ''
      };
    }
  
    componentDidMount() {
      this.setState({ instagram: dummyData })
    }

    inputChangeHandlerSearch = event => {
      this.setState({ [event.target.name]: event.target.value});
    }   
   
    searchUsername = event => {
      event.preventDefault();
      let newSearchText = {   
        text: this.state.searchText,      
      };

      this.setState({
        instagram,
        searchText: ''
      })

      let instagram = this.state.instagram.filter(post => {
        return !post.username === newSearchText;
      })

      this.setState({
        instagram
      })
      
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar 
            post={this.instagram} 
            searchUsername={this.searchUsername}
            inputChangeHandlerSearch={this.inputChangeHandlerSearch}
            value={this.state.searchText}
          />
          {this.state.instagram.map(post => 
            <PostContainer 
              post={post} 
              key={post.timestamp}
            />
          )}

        </header>
      </div>
    );
  }
}

export default App;
