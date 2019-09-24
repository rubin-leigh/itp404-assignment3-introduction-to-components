import React, { Component } from 'react';
import './SearchForm.css';

const SearchForm = props => {
    const {
        searchQuery,
        onChange,
        search
    } = props;
  

    return (
        <form className="search-form" onSubmit={search}>
            <input className="text-box" type="text" placeholder="Search" value={searchQuery} onChange={onChange} />
            <input className="submit" type="submit" value="Submit" />
        </form>
    );
  }

export default SearchForm;