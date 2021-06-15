import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    let history = useHistory()
    const handleClick=()=>{
        history.push('/')
    }
    return ( 
        <button type="back-button" onClick={handleClick} >Go back</button>
     );
}
 
export default BackButton;
