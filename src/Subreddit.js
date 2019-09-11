import React, { Component } from 'react';
import Thread from './Thread';
import Loading from './Loading';

class SubredditList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subreddit: [],
            loading: true
        }
    }

    async componentDidMount() {
        let response = await fetch('https://www.reddit.com/r/baseball.json');
        let json = await response.json();
        this.setState( { subreddit: json.data.children, loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading
                    ?   <Loading />
                    :   <div>
                            <h2>Baseball Subreddit</h2>
                            <h3>Subscribers: {this.state.subreddit[0].data.subreddit_subscribers.toLocaleString()}</h3>   
                            <ul>
                                {this.state.subreddit.map((thread, index) => {
                                    return <Thread key={index} thread={thread} />
                                })}
                            </ul>
                        </div>
                }
            </div>
        );
    } 
}

export default SubredditList;
