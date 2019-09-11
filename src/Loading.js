import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="overlay-loader">
            <div className="loader">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;
