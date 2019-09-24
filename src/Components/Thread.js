import React, { Component } from 'react';
import './Thread.css';

class Thread extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        };

        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick() {
        this.setState({ clicks: this.state.clicks+1 });
    }

    render() {
        let data = this.props.thread.data;
        return (
            <div className="thread">
                <li>
                    <a href={data.url} onClick={this.onLinkClick} target="_blank">{data.title}</a>
                </li>
                <ul>
                    <li>Score: {data.score.toLocaleString()}</li>
                    <li>Ups: {data.ups.toLocaleString()}</li>
                    {data.comments > 0 && 
                        <li>Comments: {data.comments.toLocaleString()}</li>
                    }
                    <li>Clicks: {this.state.clicks}</li>
                </ul>
            </div>
        );
    } 
}

export default Thread;
