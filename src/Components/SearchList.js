import React from 'react';

import './SearchList.css';

const SearchList = props => {
    const {
        previousSearches,
        search,
    } = props;

    return (
        <div className="container">
            {previousSearches.length > 0 && <h5>Previous Searches...</h5>}
            {previousSearches && 
                previousSearches.map(query => <button className="prev-search" onClick={search} value={query}>{query}</button>)}
        </div>
    );
}

export default SearchList;