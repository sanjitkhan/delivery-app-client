import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { init, initStore } from './utils';

// init store
const store = initStore();

// init intl
const locale = 'en';

// init
init(locale, store).then(app => {
  ReactDOM.render(app, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
