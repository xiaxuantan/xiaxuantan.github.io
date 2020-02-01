import React from 'react';
import ReactMarkdown from 'react-markdown';
import './About.css';

const about = (props) => {
    return (
        <div className="about-bg" style={{ backgroundImage: "url(" + props.bgImg + ")" }}>
            <div className="about-content">
                <ReactMarkdown source={props.shortBio} />
            </div>
        </div>
    )
}

export default about;