import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';

const Option = () => {
    return (
    <div class="option">
        <Collapsible trigger="Start here">
            <div class="option__days">
                <h2>Days in sprint:</h2>
                <input class="option__days--number" type="number"/>
            </div>
        </Collapsible>
    </div>
    )
}

export default Option