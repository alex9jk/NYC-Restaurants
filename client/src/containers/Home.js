import React,{useEffect,useState} from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import {Outlet} from "react-router-dom";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
import styled from '@emotion/styled/macro'
Amplify.configure(awsExports);
function Home(props) {
  const [dataB, setData] = useState([]);
  const HomePage = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    `
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
        
        
        <HomePage>
                  <h1>Hello {props.user.username}</h1>
                  <button onClick={props.signOut}>Sign out</button>
                </HomePage>
      </>

  )

}

export default Home;