import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'; 


class App extends Component {
    constructor() {
      super();
      this.state = {
        instagram: []
      };
    }
  
    componentDidMount() {
      this.setState({ instagram: dummyData })
    }

    inputChangeHandler = event => {
      this.setState({ [event.target.name]: event.target.value});
    }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {this.state.instagram.map(post => 
            <PostContainer 
              post={post} 
              key={post.timestamp}
              inputChangeHandler={this.inputChangeHandler}
            />
          )}
        </header>
      </div>
    );
  }
}

export default App;
