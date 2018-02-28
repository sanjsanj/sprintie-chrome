import React from 'react';
import ReactDOM from 'react-dom';

const Person = () => {
    return (
        <div>
            <div>
                <h2>Name:</h2>
                <input class="person__name" type="text"/>
            </div>
            <div>
                <h2>Days off:</h2>
                <input class="person__days-off" type="number" min="0"/>
            </div>
        </div>
    )
}

export default Person