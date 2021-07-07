import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getLinkFromDuckDuckGo } from './nightmare_api';

function getNightmareUrl() {
    // this.setState({
    //   url: 'loading',
    // });

    getLinkFromDuckDuckGo('github nightmare')
      .then((result) => {
        // this.setState({ url: result });
      })
      .catch((error) => {
        // this.setState({ url: error.toString() });
        console.error('Search failed:', error);
      });
  }

function render() {
  ReactDOM.render(<button onClick={getNightmareUrl}>Hello from React!</button>, document.body);
}

render();