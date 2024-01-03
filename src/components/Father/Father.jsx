/* eslint-disable react/prop-types */
import Child from '../Child/Child';
import './Father.css'
const Father = (props) => {
    return (
        <div className="father" > 
            <h4>Hello From father: {props.steps} </h4>
            <Child steps={props.steps}></Child>
        </div>
    );
};

export default Father;

