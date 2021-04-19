import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';

const ChaptersList=(props)=>{
    const auth=useContext(AuthContext);

    const clickHandler=(e)=>{
        e.preventDefault();
        if(props.subject==="E"){
            if(!document.getElementById(props.chapter).checked){
                auth.updateValue("E",document.getElementById(props.chapter).value,"push")
                 console.log(auth.CE);

            }
            else{
                
                auth.updateValue("E",document.getElementById(props.chapter).value,"pull")
                console.log("auth.ce"+auth.CE);
            }
        }
        if(props.subject==="M"){
            if(!document.getElementById(props.chapter).checked){
                
                auth.updateValue("M",document.getElementById(props.chapter).value,"push")
                 console.log(auth.CM);

            }
            else{
                
                auth.updateValue("M",document.getElementById(props.chapter).value,"pull")
            }
        }

        if(props.subject==="G"){
            if(!document.getElementById(props.chapter).checked){
               
                auth.updateValue("G",document.getElementById(props.chapter).value,"push")

            }
            else{
                auth.updateValue("G",document.getElementById(props.chapter).value,"pull")
            }
        }
        if(props.subject==="I"){
            if(!document.getElementById(props.chapter).checked){
                
                auth.updateValue("I",document.getElementById(props.chapter).value,"push")

            }
            else{
                
                auth.updateValue("I",document.getElementById(props.chapter).value,"pull")
            }
        }
    }
    return(
        <li key={props.chapter} style={{listStyle:'none'}}  onMouseDown={clickHandler}>
        <input type="checkbox" id={props.chapter} name={props.chapter} value={props.chapter}/>
        <label htmlFor="ChapterX1"> {props.chapter} </label><br/>
        </li>
    );
}

export default ChaptersList;