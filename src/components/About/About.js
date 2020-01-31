import React from 'react';
import './About.css';

const about = (props) => {

    return (
        <div className="about-bg" style={{ backgroundImage: "url(" + props.bgImg + ")" }}>
            <div className="about-content">
            </div>
        </div>
    )
}

export default about;