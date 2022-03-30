import AuthService from "../../services/AuthService";
import { Navigate } from "react-router-dom";
import React from 'react';

const PrivateRoute = ({children}) => {
    const auth = AuthService.checkToken();
    return auth ? children : <Navigate to="/login"/>
}

export default PrivateRoute;