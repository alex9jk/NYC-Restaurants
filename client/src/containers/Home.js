import React,{useEffect,useState} from 'react';
import ButtonAppBar from '../components/ButtonAppBar';
import {Outlet} from "react-router-dom";
function Home() {
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
        <Outlet/>
      </>

  )

}

export default Home;