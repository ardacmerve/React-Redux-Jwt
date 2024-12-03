The Redux state is a centralized storage for the application's data.

Reducer handles two actions:
LOGIN: Updates the state with the token and user information.
LOGOUT: Resets the state to its initial values.

Actions are defined:
login: Takes a token and user data as payload and triggers the login process.
logout: Clears the authentication state.

The store is created using the createStore function and the reducer.
 
 dispatch(login(token, user)) sends the login action.

The store.subscribe function allows to listen for state changes.
