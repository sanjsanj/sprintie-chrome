import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';

const Option = () => {
    return (
    <div>
        <Collapsible trigger="Start here">
            <p>This is the collapsible content. It can be any element or React component you like.</p>
            <p>It can even be another Collapsible component. Check out the next section!</p>
        </Collapsible>
    </div>
    )
}

export default Option