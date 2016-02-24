
import React, { PropTypes } from 'react';

const Footer = ({ N }) => (
    <div>
        <strong>{N} particles</strong>
    </div>
);

Footer.propTypes = {
    N: PropTypes.number.isRequired
};

export default Footer;
