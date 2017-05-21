import React from 'react';
import AnimatedText from './animated-text';
import './index.scss';

export default function Summary(props) {

    const data = props.data;
    return (
        <div className="col-md-12">
            <h1 className="name">{data.name}</h1>
            <h3 className="title"><span className="fa fa-terminal"></span> <AnimatedText text={data.title} /></h3>
            <div className="summary" dangerouslySetInnerHTML={{ __html: data.summary }}></div>
        </div>
    );

}