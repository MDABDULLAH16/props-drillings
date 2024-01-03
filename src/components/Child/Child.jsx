/* eslint-disable react/prop-types */

import './Child.css'
const Child = (props) => {
    return (
        <div className='child'>
            <h2>Child: {props.steps}</h2>
        </div>
    );
};

export default Child;