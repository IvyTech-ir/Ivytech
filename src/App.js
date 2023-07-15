import React from 'react';
import Images from './assets/images/index';
import MasterLayout from '../src/views/masterLayout/index';
import { Counter } from './components';
import './assets/css/App.css';
import './assets/css/sb-admin-2.css';
import './assets/vendor/fontawesome-free/css/all.css';
import './assets/vendor/fontawesome-free/js/all';
import './assets/vendor/bootstrap/js/bootstrap.bundle';
import './assets/vendor/jquery-easing/jquery.easing';
import './assets/vendor/chart.js/Chart.bundle';
import './assets/js/sb-admin-2';
import './assets/js/hotjar';
import './assets/js/newrelic';
function App() {
    return React.createElement(
        MasterLayout,
        null,
        React.createElement(
            'div',
            { className: 'App' },
            React.createElement(
                'header',
                { className: 'App-header' },
                React.createElement('img', { src: Images.Logo, className: 'App-logo', alt: 'logo' }),
                React.createElement(Counter, null),
                React.createElement(
                    'p',
                    null,
                    'Edit ',
                    React.createElement('code', null, 'src/App.tsx'),
                    ' and save to reload.',
                ),
                React.createElement(
                    'span',
                    null,
                    React.createElement('span', null, 'Learn '),
                    React.createElement(
                        'a',
                        {
                            className: 'App-link',
                            href: 'https://reactjs.org/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        },
                        'React',
                    ),
                    React.createElement('span', null, ', '),
                    React.createElement(
                        'a',
                        {
                            className: 'App-link',
                            href: 'https://redux.js.org/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        },
                        'Redux',
                    ),
                    React.createElement('span', null, ', '),
                    React.createElement(
                        'a',
                        {
                            className: 'App-link',
                            href: 'https://redux-toolkit.js.org/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        },
                        'Redux Toolkit',
                    ),
                    ',',
                    React.createElement('span', null, ' and '),
                    React.createElement(
                        'a',
                        {
                            className: 'App-link',
                            href: 'https://react-redux.js.org/',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        },
                        'React Redux',
                    ),
                ),
            ),
        ),
    );
}
export default App;
