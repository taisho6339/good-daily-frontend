import React from 'react';
import PropTypes from 'prop-types';

function Root(props) {
    return (
        <div>
            <p>Hello World</p>
        </div>
    );
}

// Root.propTypes = {
//     children: PropTypes.node,
//     location: PropTypes.shape({
//         pathname: PropTypes.string.isRequired
//     }).isRequired,
// };


export default Root;