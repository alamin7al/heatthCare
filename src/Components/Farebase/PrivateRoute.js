import { Route,Redirect } from 'react-router'
import UseAuth from './UseAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const {users,isLoading}= UseAuth()
    if(isLoading){
        return <h1 className='fs-5 mt-5 text-danger'>Looading...</h1>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                users.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;