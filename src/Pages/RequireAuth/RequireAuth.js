import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
    // useSignInWithEmailAndPassword
    const location = useLocation()
    
    if(!auth.user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;