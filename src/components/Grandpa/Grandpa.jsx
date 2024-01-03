import { useState } from "react";
import Father from "../Father/Father";
import './Grandpa.css'

const Grandpa = () => {
    const [steps,setSteps]=useState(0)
    return (
        <div className='Grandpa'>
            <h4>Hello Grandpa : {steps}</h4>
            <button onClick={()=>setSteps(steps => steps+1)} >Press Grand</button>
            <Father steps={steps}></Father>
        </div>
    );
};

export default Grandpa;