import { createStore } from 'redux';

// 0. Initial State
const initialState = {
    isAuthenticated: false,
    token: null,
    user: null,
};

// 1. Reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

// 2. Actions
export const login = (token, user) => ({
    type: 'LOGIN',
    payload: { token, user },
});

export const logout = () => ({
    type: 'LOGOUT',
});

// 3. Store
const store = createStore(authReducer);

// 4. Subscribe 
store.subscribe(() => {
    console.log('State updated:', store.getState());
});

// 5. Dispatch 
store.dispatch(login('fake-token', { id: 1, name: 'Jane Doe' }));
store.dispatch(logout());

export default store;
