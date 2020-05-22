import React from 'react';
import Tab from './Tab';
import './Tabs.css'

function Tabs(props) {
    return (
        <div className="tabrow">
            <Tab value='Content 1' title="Taco 1" switch={props.switch} />
            <Tab value='Content 2' title="Taco 2" switch={props.switch} />
            <Tab value='Content 3' title="Taco 3" switch={props.switch} />
            <Tab value='Content 4' title="Taco 4" switch={props.switch} />
            <Tab value='Content 5' title="Taco 5" switch={props.switch} />
            <Tab value='Content 6' title="Taco 6" switch={props.switch} />
            <Tab value='Content 7' title="Taco 7" switch={props.switch} />
        </div>
    )
}

export default Tabs

