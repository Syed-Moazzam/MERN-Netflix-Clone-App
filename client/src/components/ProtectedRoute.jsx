import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn && (path === '/sign-up' || path === '/login')) return <Navigate to={'/'} />
    else if (isLoggedIn && (path !== '/sign-up' || path !== '/login')) return <Component />
    else if (!isLoggedIn && (path === '/sign-up' || path === '/login')) return <Component />
    else if (!isLoggedIn && (path !== '/sign-up' || path !== '/login')) return <Navigate to={'/login'} />
}

export default ProtectedRoute;