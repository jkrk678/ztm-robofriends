import React from 'react';

const Scroll = props => {
    return (
        <div className='pa2' style={{ overflowY: 'scroll', borderTop: '2px solid black', height: '80vh' }}>
            {props.children}
        </div>
    );
}

export default Scroll;