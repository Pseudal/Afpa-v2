import AuthService from "../service/AuthService";
import { Navigate } from "react-router-dom";
import React from 'react';

const PrivateRoute = ({children}) => {
    const auth = AuthService.checkAdmin();
    return auth ? children : <Navigate to="/login"/>
}

export default PrivateRoute;