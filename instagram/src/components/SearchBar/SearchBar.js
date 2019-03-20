import React, { Component } from 'react';

import './SearchBar.css';

function SearchBar(props)  {

    return (
        <div>
            <form>
                <input
                  type='text'
                  name='username'
                  placeholder='search'
                  value={props.value}
                  onChange={props.inputChangeHandler}
                />    
            </form>
        </div>
    );
}

export default SearchBar;