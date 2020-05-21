import React from 'react';
import Tab from './Tab';
import './Tabs.css'

function Tabs() {
    return (
        <div className="tabrow">
            <Tab content="Content 1" />
            <Tab content="Content 2" />
            <Tab content="Content 3" />
            <Tab content="Content 4" />
            <Tab content="Content 5" />
            <Tab content="Content 6" />
            <Tab content="Content 7" />
        </div>
    )
}

export default Tabs