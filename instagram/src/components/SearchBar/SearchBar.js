import React, { Component } from 'react';

import './SearchBar.css';

function SearchBar(props)  {

    return (
        <div>
            <form onSubmit={props.searchUserName}>
                <input
                  type='text'
                  name='searchText'
                  placeholder='search'
                  value={props.value}
                  onChange={props.inputChangeHandlerSearch} 
                />   
                <button type='submit'>Search</button> 
            </form>
        </div>
    );
}

export default SearchBar;