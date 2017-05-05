import React from 'react';
import Sidebar from './components/sidebar';
import './index.scss';

export default class Personal extends React.Component {

    render() {
        return (
            <div className="col-md-3 col-sm-3 personal">
                <div id="picture" className="row profile">
                    <div className={"col-md-12 " + (this.props.mobile === true ? 'mobile-picture' : null)}>
                        <img id="profile-picture" className="img-fluid center-block" src="media/pere-pages.jpg" alt="Pere Pages" />
                    </div>
                </div>

                <div id="contact" className="row section dark-blue">
                    <Sidebar id="contact" name="CONTACT ME" data={this.props.data.contact} />
                </div>

                <div id="community" className="row section dark-blue">
                    <Sidebar id="community" name="COMMUNITY" data={this.props.data.community} />
                </div>
            </div>);
    }
}