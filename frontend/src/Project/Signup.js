import React,{useContext} from 'react'
import './Login.css'
import { AuthContext } from '../context/AuthContext';
import {useHttpClient} from '../context/Http-Hook'
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../context/LoadingSpinner'


const Signup=()=>{ 
   const auth=useContext(AuthContext);
  const history = useHistory();
  const {isLoading,sendRequest}=useHttpClient();

const submitHandler=async (e)=>{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const cpassword=document.getElementById('cpassword').value;
    if(password===cpassword){
      let data;
      try{
        console.log(email,password);
      data= await sendRequest(
          `http://localhost:5000/signup`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  email:email,
                  password:password,
          }));

          if(data==="successfull"){
            console.log("done");
              auth.LOGIN(document.getElementById("email").value)
              history.push('/');
          }
          else{
            alert(data)
          }
          
      }
      catch(err){
          console.log(err.message);
      }
    }
    // alert("email "+email+", password "+password+" cp "+cpassword);
    else
    alert('password not matching')
}

    return(
        <div>
        {isLoading && <LoadingSpinner asOverlay/>}{!isLoading && <div>
        <h2>Signup Form</h2>

<form action="" method="post" onSubmit={submitHandler}>

  <div class="container">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="password" name="psw" required/>

    <label for="psw"><b>Confim Password</b></label>
    <input type="password" placeholder="Enter Confirm Password" id="cpassword" name="psw" required/>

        
    <button type="submit" >Signup</button>
  </div>

  <div class="container" style={{"background-color":"#f1f1f1"}}>
  </div>
</form>
</div>}</div>
    );
}

export default Signup;