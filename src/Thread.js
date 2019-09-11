import React, { Component } from 'react';
import './Thread.css';

class Thread extends Component {
    render() {
        let data = this.props.thread.data;
        return (
            <div className="thread">
                <li>
                    <a href={data.url}>{data.title}</a>
                </li>
                <ul>
                    <li>Score: {data.score.toLocaleString()}</li>
                    <li>Ups: {data.ups.toLocaleString()}</li>
                    {data.comments > 0 && 
                        <li>Comments: {data.comments.toLocaleString()}</li>
                    }
                    {data.banner_background_image &&
                        <img src={data.banner_background_image} alt={data.banner_background_image}/>
                    }
                </ul>
            </div>
        );
    } 
}

export default Thread;
