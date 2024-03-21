import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && (path === '/sign-up' || path === '/sign-in')) return <Navigate to={'/'} />
    else if (isLoggedIn && (path !== '/sign-up' || path !== '/sign-in')) return <Component />
    else if (!isLoggedIn && (path === '/sign-up' || path === '/sign-in')) return <Component />
    else if (!isLoggedIn && (path !== '/sign-up' || path !== '/sign-in')) return <Navigate to={'/sign-in'} />
}

export default ProtectedRoute;