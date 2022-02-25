import React, { useState, useEffect }  from 'react';
import { Navigate, Route } from "react-router-dom";
import { Auth } from 'aws-amplify';
import Landing from './containers/Landing'
import App from './App';
const PrivateRoute = ({ children, ...rest }) => {
  const [signInUser, setSignInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let getUser = async() => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        await setSignInUser(user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error)        
      }
    }
    getUser();
  },[]);

  if(isLoading) {
      console.log("loading")
    return <p>...Loading</p>
  }
  return (
      signInUser ? <App/>
      : <Navigate to="/home"/>
        // : <Navigate to={{
        //              pathname: '/map',
                     
        //           }} />
    // <Route {...rest} render={({ location }) => {
    //   return signInUser? <Landing/>
    //     : <Navigate to={{
    //         pathname: '/',
    //         state: { from: location }
    //       }} />
    // }} />
  )
}
export default PrivateRoute;