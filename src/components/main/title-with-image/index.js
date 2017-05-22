import React from 'react';
import './index.scss';
import ExternalLink from '../../shared/external-link';

export default function TitleWithImage(props) {

    const data = props.data;
    return (
        <div className="employer-header">
            <div className="employer-image float-left" ><img width="68px" src={"media/" + data.imageFile} alt={data.line2} /></div>
            <div className="name-and-title">
                <h1><span className={"fa fa-" + data.icon}></span> {data.line1}</h1>
                {(data.url) ?
                    <h2><ExternalLink url={data.url}>{data.line2}</ExternalLink></h2>
                    :
                    <h2>{data.line2}</h2>
                }

            </div>
        </div>);

}