import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
import {useHttpClient} from '../context/Http-Hook'
import LoadingSpinner from '../context/LoadingSpinner'
import {useHistory } from 'react-router-dom';

import Quiz2 from './Quiz2'

const Quiz=(props)=>{
  const auth=useContext(AuthContext);
  const [data,setData]=useState([])
  const history = useHistory();
  const {isLoading,error,sendRequest,clearError}=useHttpClient();
  useEffect(async ()=>{
    try{
        let data= await sendRequest(
        `http://localhost:5000/questions`,
        'POST',
        {'Content-Type':'application/json'},
        JSON.stringify({
                subject:props.Subject,
                chapter:props.Chapter
        }));
        setData(data);
  
          console.log("useEffect "+data[0].questions);
          
      }
      catch(err){
          console.log(err+"dp shetty");
      }
  },[])


    return(
          <div>
   {data.length!=0 && data.map((item,i)=>{
     return <Quiz2 i={i} item={item}/>
   })}
    
 </div>
    );
}

export default Quiz;