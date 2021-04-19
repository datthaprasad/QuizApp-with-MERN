import {createContext} from 'react'
export const AuthContext=createContext({
    isLogedIn:false,
    email:null,
    password:null,
    CE:[],
    CG:[],
    CI:[],
    CM:[],
    updateValue:()=>{},
    LOGIN:()=>{}
    
    });