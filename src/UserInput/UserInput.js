import React from 'react';

const userInput = (props) => {

    const myStyle = {
        border: '2px solid red'        
    };

    return <input type="text" 
    onChange={props.changed}
    value={props.currentName}
    style={myStyle}/>;
};

export default userInput;