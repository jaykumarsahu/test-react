import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Session from './components/session';
import Registration from './components/registration';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Registration />, document.getElementById('root'));
registerServiceWorker();
