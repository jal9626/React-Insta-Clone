import React, { Component } from 'react';

import './SearchBar.css';

function SearchBar(props)  {

    return (
        <div>
            
            <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
         
        </div>
    );
}

export default SearchBar;