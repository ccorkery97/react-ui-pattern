import React from 'react';
import Tab from './Tab';
import './Tabs.css'

function Tabs(props) {
    return (
        <div className="tabrow">
            <Tab value='Content 1' title={props.name[6].name} active={props.active[6]} switch={props.switch} />
            <Tab value='Content 2' title={props.name[1].name} active={props.active[1]} switch={props.switch} />
            <Tab value='Content 3' title={props.name[2].name} active={props.active[2]} switch={props.switch} />
            <Tab value='Content 4' title={props.name[3].name} active={props.active[3]} switch={props.switch} />
            <Tab value='Content 5' title={props.name[4].name} active={props.active[4]} switch={props.switch} />
            <Tab value='Content 6' title={props.name[5].name} active={props.active[5]} switch={props.switch} />
            <Tab value='Content 7' title={props.name[0].name} active={props.active[0]} switch={props.switch} />
        </div>
    )
}

export default Tabs

