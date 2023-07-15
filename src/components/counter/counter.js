import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { decrement, increment, incrementByAmount, incrementAsync, incrementIfOdd, selectCount } from './counterSlice';
import styles from './Counter.module.css';
export function Counter() {
    var count = useAppSelector(selectCount);
    var dispatch = useAppDispatch();
    var _a = useState('2'),
        incrementAmount = _a[0],
        setIncrementAmount = _a[1];
    var incrementValue = Number(incrementAmount) || 0;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: styles.row },
            React.createElement(
                'button',
                {
                    className: styles.button,
                    'aria-label': 'Decrement value',
                    onClick: function () {
                        return dispatch(decrement());
                    },
                },
                '-',
            ),
            React.createElement('span', { className: styles.value }, count),
            React.createElement(
                'button',
                {
                    className: styles.button,
                    'aria-label': 'Increment value',
                    onClick: function () {
                        return dispatch(increment());
                    },
                },
                '+',
            ),
        ),
        React.createElement(
            'div',
            { className: styles.row },
            React.createElement('input', {
                className: styles.textbox,
                'aria-label': 'Set increment amount',
                value: incrementAmount,
                onChange: function (e) {
                    return setIncrementAmount(e.target.value);
                },
            }),
            React.createElement(
                'button',
                {
                    className: styles.button,
                    onClick: function () {
                        return dispatch(incrementByAmount(incrementValue));
                    },
                },
                'Add Amount',
            ),
            React.createElement(
                'button',
                {
                    className: styles.asyncButton,
                    onClick: function () {
                        return dispatch(incrementAsync(incrementValue));
                    },
                },
                'Add Async',
            ),
            React.createElement(
                'button',
                {
                    className: styles.button,
                    onClick: function () {
                        return dispatch(incrementIfOdd(incrementValue));
                    },
                },
                'Add If Odd',
            ),
        ),
    );
}
