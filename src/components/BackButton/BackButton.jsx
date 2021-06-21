import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    let history = useHistory()

    return ( 
        <button type="back-button" onClick={()=>history.goBack()} >Go back</button>
     );
}
 
export default BackButton;
