import React from 'react';
import './Tab.css'

function Tab(props) {
    return (
        <button className={props.active} value={props.value} onClick={props.switch}>{props.title}</button>
    )
}

export default Tab

