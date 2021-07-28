import {useEffect, useReducer, createContext, ReactNode  } from "react";
import Reducer from "./Reducer";
import { ActionTypes } from "./actionTypes";
import { tasksData } from "../Data";

export interface ITask {
    id:number,
    title:string,
    description:string
}
type Tasks = ITask[] | []
interface  IContext {
    tasks:Tasks,
    dispatch:React.Dispatch<ActionTypes>
}
export const initialState:IContext= {
    tasks:[],
    dispatch:()=>{ }
  
    
}

export const Context = createContext<IContext>(initialState);


export const ContextProvider = ({children}:{children:ReactNode}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    useEffect(()=>{
        dispatch({type:"ADD_TASKS",payload:tasksData})
    },[]);

    return(
        <Context.Provider value={{tasks:state.tasks,dispatch}}>
        {children}
        </Context.Provider>
    )
}