
import React from 'react';

const Footer = ({ N, fps }) => (
    <div style={{position: 'absolute', bottom: 0}} className="container">
        <strong>{N} particles</strong>
    </div>
);

export default Footer;
