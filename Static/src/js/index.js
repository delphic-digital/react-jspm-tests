//Hot swapping for dev
import 'systemjs-hot-reloader/default-listener.js';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById("main"));