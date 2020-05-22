import React from 'react';
import Tab from './Tab';
import './Tabs.css'

function Tabs(props) {
    return (
        <div className="tabrow">
            <Tab value='Content 1' title={props.name[6].name} switch={props.switch} />
            <Tab value='Content 2' title={props.name[1].name} switch={props.switch} />
            <Tab value='Content 3' title={props.name[2].name} switch={props.switch} />
            <Tab value='Content 4' title={props.name[3].name} switch={props.switch} />
            <Tab value='Content 5' title={props.name[4].name} switch={props.switch} />
            <Tab value='Content 6' title={props.name[5].name} switch={props.switch} />
            <Tab value='Content 7' title={props.name[0].name} switch={props.switch} />
        </div>
    )
}

export default Tabs

