// Uncomment to add polyfills to run on IE (e.g. IE11)
// import 'react-app-polyfill/ie9';
// import 'ie-array-find-polyfill';
// import 'array-findindex-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App configuration={window.appConfig} />,
    document.getElementById("root")
);

registerServiceWorker();
