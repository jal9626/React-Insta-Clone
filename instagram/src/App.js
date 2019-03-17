import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    constructor() {
      super();
      this.state = {
        instagram: dummyData,
        comment: ''
      };
    }
  
    inputChangeHandler = event => {
      this.setState({ [event.target.name]: event.target.value});
    }
    formSubmitHandler = event => {
      event.preventDefault();
      let newComment = {  
          username: 'me',
          comments: [
            {
              username: 'me',
              text: this.state.comment,
            }  
          ]
      };
      this.setState(prevState => {
        return {
          instagram: [...prevState.instagram, newComment],
          comment: '',
        };
      });
    };
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.instagram.map(post => 
            <PostContainer 
              post={post} key={post.timestamp} 
              inputChangeHandler={this.inputChangeHandler}
              formSubmitHandler={this.formSubmitHandler}
              value={this.state.comment}
            />
          )}
          
        </header>
      </div>
    );
  }
}

export default App;
