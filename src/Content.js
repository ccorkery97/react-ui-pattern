import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <div className="content">
            <h1 className="name">{props.name}</h1>
            <p className='recipe'>{props.recipe}</p>
        </div>
    )
}

export default Content