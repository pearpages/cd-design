import React from 'react';
import './index.scss';

export default function DesktopMenu(props) {

    const p = props;
    return (
    <div className="desktop-menu">
        <div className="container">
            {p.anchors.map((item) => {
                return <span
                            className={(p.active === item.id) ? 'active' : '' } key={item.id}
                            onClick={props.setActive(item.id)}
                            href={'#' + item.id}
                        >{item.name}</span>})}
        </div>
    </div>);

}