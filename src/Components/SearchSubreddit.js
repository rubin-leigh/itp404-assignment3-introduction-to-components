import React, { Component } from 'react';
import SubredditList from './SubredditList';
import SearchFrom from './SearchForm';
import Loading from './Loading';
import SearchList from './SearchList';

class SearchSubreddit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: '',
            subredditTitle: '',
            subreddit: [],
            loading: false,
            previousSearches: [],
        }

        this.onSearchQueryChange = this.onSearchQueryChange.bind(this);
        this.onFormSearch = this.onFormSearch.bind(this);
        this.onButtonSearch = this.onButtonSearch.bind(this);
    }

    onSearchQueryChange(e) {
        this.setState({searchQuery: e.target.value});
    }
    
    onFormSearch = async (e) => {
        e.preventDefault();
        let newPrevSearches = this.state.previousSearches;
        if (this.state.previousSearches.indexOf(this.state.searchQuery.toLowerCase()) === -1)
            newPrevSearches = [...this.state.previousSearches, this.state.searchQuery.toLowerCase()];
        this.setState( { loading: true, previousSearches: newPrevSearches }, () => {
            this.searchSubreddit();
        });
    }

    onButtonSearch = async (e) => {
        e.preventDefault();
        this.setState( { loading: true, searchQuery: e.target.value }, () => {
            this.searchSubreddit();
        });
    }

    searchSubreddit = async () => {
        let response = await fetch(`https://www.reddit.com/r/${this.state.searchQuery}.json`);
        let json = await response.json();
        this.setState( { subreddit: json.data.children, subredditTitle: this.state.searchQuery, loading: false });
    }

    render() {
        const {searchQuery, subredditTitle, subreddit, loading, previousSearches} = this.state;
        return (
            <div>
                <SearchFrom 
                    searchQuery={searchQuery}
                    onChange={this.onSearchQueryChange}
                    search={this.onFormSearch}
                />
                <SearchList 
                    previousSearches={previousSearches}
                    search={this.onButtonSearch}
                />
                {loading && <Loading />}
                {!loading && subreddit.length > 0 &&
                    <SubredditList
                        subreddit={subreddit} 
                        searchQuery={subredditTitle}
                    />
                }
            </div>
        );
    }
}

export default SearchSubreddit