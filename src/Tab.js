import React from 'react';
import './Tab.css'

function Tab(props) {
    return (
        <button>{props.title}</button>
    )
}

export default Tab

//onClick={props.switch}