import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login';
import { getCurrentUser } from '../utils/helpers/localStorage';
const router = createHashRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);
export default function () {
    const user = getCurrentUser();
    if (!user) {
        router.navigate('/login');
    }
    return <RouterProvider router={router} />;
}
