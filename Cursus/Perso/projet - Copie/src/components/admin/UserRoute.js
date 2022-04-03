import AuthService from "../service/AuthService";
import { Navigate } from "react-router-dom";
import React from 'react';

const UserRoute = ({children}) => {
    const admin = AuthService.checkAdmin();
    const user = AuthService.checkToken();
    return admin||user ? children : <Navigate to="/login"/>
}

export default UserRoute;