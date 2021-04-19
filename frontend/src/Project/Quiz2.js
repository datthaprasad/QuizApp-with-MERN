import React,{useContext, useEffect, useState} from 'react';
import { AuthContext } from '../context/AuthContext';
import {useHttpClient} from '../context/Http-Hook'
import LoadingSpinner from '../context/LoadingSpinner'
import {useHistory } from 'react-router-dom';

const Quiz2=(props)=>{
    const auth=useContext(AuthContext);
    const history = useHistory();
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
    const i=props.i;
    const item=props.item;
    const [score,setScore]=useState(false);
    const [submit,setSubmit]=useState(false);
    const [color,setColor]=useState("red")

    const submitHandler=async()=>{
        let selected=null;
        console.log("question "+item.questions[0]);

        await document.getElementsByName(i).forEach((rate) => {
            if (rate.checked) {
                selected=rate.id;
            }
        })
        if(!selected) alert("please select the options");
        else
        try{
            let data= await sendRequest(
            `http://localhost:5000/answer`,
            'POST',
            {'Content-Type':'application/json'},
            JSON.stringify({
                    subject:item.subject,
                    chapter:item.chapter,
                    question:item.questions[0].toString(),
                    answer:selected,
                    correctAnswer:item.questions[5].toString()

            }));
            if(item.questions[5].toString()===selected){
                console.log(selected+" and "+item.questions[4].toString());
                setScore(true);
                setColor("green")
            }
              if(data==="successfull") setSubmit(true);
              else alert("something went wrong, try again"+data)
              
          }
          catch(err){
              console.log(err+"dp shetty");
          }

    }

    return(<div>
        {isLoading && <LoadingSpinner asOverlay/>}
        {!isLoading && <form onSubmit={submitHandler}>
        <h3>Question {i} </h3>
        <h4>{item.questions[0]}</h4>
        (a) {item.questions[1]} (b) {item.questions[2]} (c){item.questions[3]} (d) {item.questions[3]} <br/><br/>

        <input type="radio" name={i} id={"1"} style={{"margin-right": "0"}}/> 
        <label htmlFor="a" >a</label>
        <input type="radio" name={i} id={"2"} style={{"margin-right":"0"}} /> 
        <label htmlFor="b">b</label>
        <input type="radio" name={i} id={"3"} style={{"margin-right":"0"}}/> 
        <label htmlFor="c">c</label>
        <input type="radio" name={i} id={"4"} style={{"margin-right":"0"}}/> 
        <label htmlFor="d">d</label>
        <hr/>
        {submit && <input value={score?"Correct":"Wrong"} style={{"backgroundColor":`${color}`,"padding":"10px","color":"white","marginLeft":"40%","width":"10%","textAlign":"center"}}/>}
        {!submit && <input type="submit" value="Submit" style={{"backgroundColor":"blue","padding":"10px","color":"white","marginLeft":"40%","width":"10%"}}/>}
        </form>
        }
        </div>
    );
    }

export default Quiz2;