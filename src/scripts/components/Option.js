import React from 'react';
import ReactDOM from 'react-dom';
import Collapsible from 'react-collapsible';

const Option = () => {
    return (
    <div class="option__wrapper">
        <Collapsible trigger="Start here">
            <div class="option option__days">
                <h2>Days in sprint:</h2>
                <input class="option__days--number" type="number" min="0"/>
            </div>
            <div class="option option__days-dev">
                <h2>Points per developer per day:</h2>
                <input class="option__days--number-dev" type="number" min="0"/>
            </div>
        </Collapsible>
    </div>
    )
}

export default Option
