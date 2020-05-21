import React from 'react';
import Tab from './Tab';
import './Tabs.css'

function Tabs(props) {
    return (
        <div className="tabrow">
            <Tab title="Content 1" />
            <Tab title="Content 2" />
            <Tab title="Content 3" />
            <Tab title="Content 4" />
            <Tab title="Content 5" />
            <Tab title="Content 6" />
            <Tab title="Content 7" />
        </div>
    )
}

export default Tabs

//switch={props.switch}