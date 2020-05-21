import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <div className="content">
            <p>{props.content}</p>
        </div>
    )
}

export default Content