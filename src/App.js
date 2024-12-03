import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import AuthComponent from './AuthComponent';

const App = () => (
    <Provider store={store}>
        <div className="App">
            <AuthComponent />
        </div>
    </Provider>
);

export default App;


