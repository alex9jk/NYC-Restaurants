import React,{useEffect,useState} from 'react';
import styled from '@emotion/styled/macro';
import RestCard from '../components/Card';
const wrapper = styled.div`
    width:100%
`
const Rest = () => {
    const [restData,setRestData] = useState([]);
    useEffect(()=>{
         const getData = async () => {
            let resp = await fetch("http://localhost:5000/restaurants");
            let data = await resp.json(resp);
            console.log(data)
            setRestData(data);
        }
        getData()
        .catch(err=>console.log(err))
    },[])
    return(
        <div></div>
    )
}

export default Rest;