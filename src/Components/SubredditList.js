import React, { Component } from 'react';
import Thread from './Thread';
import './SubredditList.css';

const SubredditList = props => {
    return (
        <div>
            <div>
                <h2>{props.searchQuery} Subreddit</h2>
                <h3>Subscribers: {props.subreddit[0].data.subreddit_subscribers.toLocaleString()}</h3>   
                <ul>
                    {props.subreddit.map((thread, index) => {
                        return <Thread key={index} thread={thread} />
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SubredditList;
