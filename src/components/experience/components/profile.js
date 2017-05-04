import React from 'react'

export default class Profile extends React.Component {
    render() {
        return (
            <div className="col-md-12">
                <h1 className="name">PERE PAGES SOMS</h1>
                <h3 className="title">Full Stack Developer</h3>
                <div className="summary">
                    <p>I am a programmer with over 10 years experience. My main languages are Javascript and PHP. I have worked in Web Development
        and Insurance, in Front End and Back End projects, independently and with teams, alongside Designers and Business
        Analysts.</p>

                    <p>I like simplicity, minimalism and quality. For me, code must be easy to understand, consistent, testable, short and modular.</p>

                    <p>I try to write code daily, attend talks weekly and meet colleagues as often as I can.</p>
                </div>
            </div>
        );
    }
}