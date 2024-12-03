import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux';

const AuthComponent = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogin = () => {
        const fakeToken = 'fake-jwt-token';
        const fakeUser = { id: 1, name: 'John Doe' };
        dispatch(login(fakeToken, fakeUser));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h1>Authentication Demo</h1>
            {isAuthenticated ? (
                <div>
                    <p>Welcome back!</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </div>
    );
};

export default AuthComponent;
