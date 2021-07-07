import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {getLinkFromDuckDuckGo} from './nightmare';

function handleClick() {
    getLinkFromDuckDuckGo('test')
}

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <button onClick={handleClick}>Hello from React!</button>
        </React.StrictMode>,
        document.getElementById("app")
    );
}

render();