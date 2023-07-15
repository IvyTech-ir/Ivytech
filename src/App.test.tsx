import React from 'react';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders app', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    expect(getByText(/learn/i)).toBeInTheDocument();
});
