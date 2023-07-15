import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import reportWebVitals from './services/reportWebVitals';
var container = document.getElementById('root');
var root = createRoot(container);
root.render(
    React.createElement(
        React.StrictMode,
        null,
        React.createElement(Provider, { store: store }, React.createElement(App, null)),
    ),
);
reportWebVitals(console.log);
