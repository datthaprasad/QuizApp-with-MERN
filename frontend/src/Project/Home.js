import React, { useState,useContext } from 'react'
import Chapters from './Chapter'
import {useHttpClient} from '../context/Http-Hook'
import {Link,useHistory } from 'react-router-dom';
import LoadingSpinner from '../context/LoadingSpinner'
import { AuthContext } from '../context/AuthContext';

const Home=(props)=>{
  
  const auth=useContext(AuthContext);
const [Subject,setSubjects]=useState([]);

const [chapters,setChapters]=useState(false);
const [chapters_listM,setChaptersListM]=useState([]);
const [chapters_listE,setChaptersListE]=useState([]);
const [chapters_listG,setChaptersListG]=useState([]);
const [chapters_listI,setChaptersListI]=useState([]);


const history = useHistory();
const {isLoading,error,sendRequest,clearError}=useHttpClient();

const checkHandler=(e)=>{
  e.preventDefault();
  if(!e.target.checked)
  setSubjects(Subject=>[...Subject,(e.target.value)]);
  else
  setSubjects(Subject.filter(item=>item!==e.target.value))
}

const subjectHandler=async (event)=>{
  event.preventDefault();
    event.preventDefault();
    let data;
    if(Subject.includes("Maths")){
      try{
        data= await sendRequest(
          `http://localhost:5000/subjects`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  name:"Maths"
          }));
    
            if(data==="login successfull"){
    
            }
            else{
              setChaptersListM(data)
            }
            
        }
        catch(err){
            console.log(err);
        }
    }
    if(Subject.includes("English")){
      try{
        data= await sendRequest(
          `http://localhost:5000/subjects`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  name:"English"
          }));
    
            if(data==="login successfull"){
    
            }
            else{
              setChaptersListE(data)
            }
            
        }
        catch(err){
            console.log(err);
        }
    }
    if(Subject.includes("GK")){
      try{
        data= await sendRequest(
          `http://localhost:5000/subjects`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  name:"GK"
          }));
    
            if(data==="login successfull"){
    
            }
            else{
              setChaptersListG(data)
            }
            
        }
        catch(err){
            console.log(err);
        }
    }
    if(Subject.includes("Intelligence")){
      try{
        data= await sendRequest(
          `http://localhost:5000/subjects`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  name:"Intelligence"
          }));
    
            if(data==="login successfull"){
    
            }
            else{
              setChaptersListI(data)
            }
            
        }
        catch(err){
            console.log(err);
        }
    }

  //fetch from backend

  console.log(Subject,chapters_listM);
  setChapters(true);
}


  return(
    
<div>
  {!isLoading && auth.isLogedIn &&
 <div>
  <h2>Select Subjects</h2>
  <form onSubmit={subjectHandler}>
    <input type="checkbox" id="Sub1" name="Sub1" value="Maths" onMouseDown={checkHandler}/>
      <label htmlFor="Sub1"> Maths </label><br/>
    <input type="checkbox" id="Sub2" name="Sub2" value="English" onMouseDown={checkHandler}/>
      <label htmlFor="Sub2"> English</label><br/>
    <input type="checkbox" id="Sub3" name="Sub3" value="GK" onMouseDown={checkHandler}/>
      <label htmlFor="Sub3"> GK </label><br/>
    <input type="checkbox" id="Sub4" name="Sub4" value="Intelligence" onMouseDown={checkHandler}/>
      <label htmlFor="Sub4"> Intelligence </label><br/>
    <input type="submit" value="Submit"/><br/>
  </form>
 </div>}
 
  {
    chapters && <div><Chapters  ChaptersM={chapters_listM} ChaptersE={chapters_listE} ChaptersG={chapters_listG} ChaptersI={chapters_listI}/>
    <input style={{"marginLeft":"45%","text":"white","fontSize":"30px","textAlign":"center","backgroundColor":"blue","padding":"5px"}} type="submit" value="Start the Quizz" onClick={()=>history.push('/quizz')}/><br/><br/></div>
  }

{isLoading && <LoadingSpinner asOverlay/>}
    {!auth.isLogedIn && <div><h1>YOU DONT HAVE VALID ACCOUNT</h1><Link onClick={()=>history.push('/login')}> Click here to Login</Link></div>}
  
 </div>

  );
}

export default Home;