import Login from './Project/Login'
import Signup from './Project/Signup'
import Home from './Project/Home'
import QuizH from './Project/quizHome'
import {AuthContext} from './context/AuthContext'

import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import { useState,useCallback } from 'react'

function App() {

  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null)
  const [isLogedIn,setLogedIn]=useState(false);

  const[e,setE]=useState([]);
  const[m,setM]=useState([]);
  const[g,setG]=useState([]);
  const[i,setI]=useState([]);

  const updateValue=useCallback((sub,value,operate)=>{
    if(sub==="E" && operate==="push")
      if(!e.includes(value))e.push(value)
    if(sub==="E" && operate==="pull")
      if(e.includes(value))e.pop(value)

      if(sub==="M" && operate==="push")
      if(!m.includes(value))m.push(value)
    if(sub==="M" && operate==="pull")
    if(m.includes(value))m.pop(value)

      if(sub==="G" && operate==="push")
      if(!g.includes(value))global.push(value)
    if(sub==="G" && operate==="pull")
    if(g.includes(value))g.pop(value)

      if(sub==="I" && operate==="push")
      if(!i.includes(value))i.push(value)
    if(sub==="I" && operate==="pull")
    if(i.includes(value))i.pop(value)
    

  } ,[]);

  const Login1 = useCallback((email,password)=>{
    setEmail(email);
    setPassword(password)
    setLogedIn(true);
  },[]);

  return (
    <AuthContext.Provider value={{isLogedIn:isLogedIn,email:email,password:password,LOGIN:Login1,CE:e,CM:m,CG:g,CI:i,updateValue:updateValue}} >
    <Router>
      <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path='/signup' exact>
        <Signup/>
      </Route>
      <Route path='/quizz'>
        <QuizH/>
      </Route>
      <Redirect to='/'/>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
