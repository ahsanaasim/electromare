import * as React from 'react';
import * as ReactDOM from 'react-dom';

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <button>Hello from React!</button>
        </React.StrictMode>,
        document.getElementById("app")
    );
}

render();