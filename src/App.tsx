import React from 'react';
import Images from './assets/images/index';
import MasterLayout from './views/masterLayout/masterLayout';
import { Counter } from './components';
import MainContext from './context/context';
function App() {
    return (
        <MainContext>
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
                            <a
                                className="App-link"
                                href="https://reactjs.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                React
                            </a>
                            <span>, </span>
                            <a
                                className="App-link"
                                href="https://redux.js.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
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
        </MainContext>
    );
}

export default App;
