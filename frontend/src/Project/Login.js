import React,{useContext} from 'react'
import './Login.css'
import { AuthContext } from '../context/AuthContext';
import {useHttpClient} from '../context/Http-Hook'
import { Link, useHistory } from 'react-router-dom';
import LoadingSpinner from '../context/LoadingSpinner'

const Login=()=>{
  const auth=useContext(AuthContext);
  const history = useHistory();
  const {isLoading,error,sendRequest,clearError}=useHttpClient();

  const loginHandler=async (event)=>{
      event.preventDefault();
      auth.CE.push("hai bro")
      console.log("auth array is "+auth.CM);
      let data;
      try{
      data= await sendRequest(
          `http://localhost:5000/login`,
          'POST',
          {'Content-Type':'application/json'},
          JSON.stringify({
                  email:document.getElementById("email").value,
                  password:document.getElementById("password").value,
          }));

          if(data==="login successfull"){
              auth.LOGIN(document.getElementById("email").value,false)
              history.push('/');
          }
          else{
            alert(data)
          }
          
      }
      catch(err){
          console.log(err);
      }
  }


    return(
        <div>
          {isLoading && <LoadingSpinner asOverlay/>}
        {!isLoading && <div><h2>Login Form</h2>

<form action="" method="post" onSubmit={loginHandler}>
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Email" name="uname" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" id="password" name="psw" required/>
        
    <button type="submit" >Login</button>
  </div>
</form></div>}
</div>
    );
}

export default Login;