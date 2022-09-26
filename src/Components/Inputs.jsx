import React from 'react';
import "./Input.css"
function Inputs({type,plchld,handleChange,value}) {
    return (
        <div>
            <input type={type}
            placeholder={plchld}
            value={value}
            onChange={handleChange}
            />
        </div>
    );
}

export default Inputs;