import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator';
import registerServiceWorker from './registerServiceWorker';
import Site from './Site';

ReactDOM.render(<Site />, document.getElementById('root'));
registerServiceWorker();
