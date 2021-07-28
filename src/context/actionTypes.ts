import {ITask } from "./Context";

interface IPayload {
    title:string,
    description:string
}

 export type ActionTypes= 
{
    type:"ADD_TASK",
    payload: IPayload
} |
{
    type:"ADD_TASKS",
    payload: ITask[]
}|
{
    type:"UPDATE_TASK",
    payload: ITask
} |
{
    type:"DELETE_TASK",
    payload: number
}