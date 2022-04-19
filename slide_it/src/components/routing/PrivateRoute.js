import {
    Route,
    Redirect
} from 'react-router-dom';

function PrivateRoute({ children, authToken, ...rest }) {
    localStorage.setItem("authToken", data.token);
    return (
        <Route
            {...rest}
            render={
                ({ location }) => (
                    authToken
                        ? (
                            children
                        ) : (
                            <Redirect
                                to={{
                                    pathname: '/signin',
                                    state: { from: location }
                                }}
                            />
                        ))
            }
        />
    );
}

export default PrivateRoute;
