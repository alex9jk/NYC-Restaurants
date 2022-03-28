import React,{useEffect,useState} from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import {Outlet} from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import styled from '@emotion/styled/macro'
import { jsx, css, Global, keyframes } from '@emotion/react/macro'
import backImage from "../images/img1.jpg";
import Home from "./Home"
Amplify.configure(awsExports);

const BackgroundSplash = styled.div`
background: url(${backImage}) no-repeat center center fixed;
height: 100%;
`


const BackContainer = styled.body`

height: 100%;
`
function Landing({signOut, user}) {
  const [dataB, setData] = useState([]);
  // useEffect(()=>{
  //   try {
  //     fetch("http://localhost:5000/restaurants")
  //     .then(response => 
  //       //console.log(response.json())
  //       response.json())
  //     .then(data =>{
  //       let dataB = JSON.stringify(data,null,2)
  //       console.log(">>>",dataB)
  //       setData(data)})
  //   }
  //   catch(err){
  //     console.log(err)}

  // },[])
  return (
      <>
        <ButtonAppBar/>
        <BackgroundSplash>
                <Authenticator className="auth">
                {({ signOut, user }) => (
                    <Home signOut={signOut} user={user}/>

                )}
                </Authenticator>

            


                
            </BackgroundSplash>
            
       



       


        
 
      </>

  )

}

export default Landing;