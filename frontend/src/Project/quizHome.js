import React,{useContext} from 'react';
import Quiz from './Quiz'
import { AuthContext } from '../context/AuthContext';
import {useHttpClient} from '../context/Http-Hook'
import LoadingSpinner from '../context/LoadingSpinner'

const QuizH=(props)=>{
    const auth=useContext(AuthContext);
    const {isLoading,error,sendRequest,clearError}=useHttpClient();
return(<div>
    {auth.CE.length!=0 &&
        auth.CE.map((item)=><Quiz Subject={"English"} Chapter={item}/>)
    }
    {auth.CM.length!=0 &&
        auth.CM.map((item)=><Quiz Subject={"Maths"} Chapter={item}/>)
    }

    </div>
);
}

export default QuizH;