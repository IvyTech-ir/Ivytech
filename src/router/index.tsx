import React from 'react';
import { createHashRouter, RouterProvider  ,  } from 'react-router-dom';
import App from './../App';
import Login from '../pages/login';
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
    const [authenticated, setauthenticated] = React.useState(null);
    React.useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
      }, []);
    if(!authenticated)
    {
        router.navigate("/login");
    }
    return <RouterProvider router={router} />;
}
