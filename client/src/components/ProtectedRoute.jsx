import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isPublicPath = path === '/' || path === '/sign-up';

    if (isLoggedIn && isPublicPath) return <Navigate to={'/browse'} />
    if (!isLoggedIn && !isPublicPath) return <Navigate to={'/'} />
    return <Component />
}

export default ProtectedRoute;