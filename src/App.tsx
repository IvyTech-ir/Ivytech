import React from 'react';
import Images from './assets/images/index';
import MasterLayout from "../src/views/masterLayout/index";
import { Counter } from './components';
import './assets/css/App.css';
import './assets/css/sb-admin-2.css';
import './assets/vendor/fontawesome-free/css/all.css';
import './assets/vendor/fontawesome-free/js/all';
// import './assets/vendor/bootstrap/js/bootstrap.bundle';
// import './assets/vendor/jquery-easing/jquery.easing';
// import './assets/vendor/chart.js/Chart.bundle';
// import './assets/js/sb-admin-2';
// import './assets/js/hotjar';
// import './assets/js/newrelic';

function App() {
    return (
        <MasterLayout>
            <div className="App">
                <header className="App-header">
                    <img src={Images.Logo} className="App-logo" alt="logo" />
                    <Counter />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <span>
                        <span>Learn </span>
                        <a className="App-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            React
                        </a>
                        <span>, </span>
                        <a className="App-link" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                            Redux
                        </a>
                        <span>, </span>
                        <a
                            className="App-link"
                            href="https://redux-toolkit.js.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Redux Toolkit
                        </a>
                        ,<span> and </span>
                        <a
                            className="App-link"
                            href="https://react-redux.js.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            React Redux
                        </a>
                    </span>
                </header>
            </div>
        </MasterLayout>
    );
}

export default App;
