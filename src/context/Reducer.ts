import { initialState,ITask } from "./Context";
import { ActionTypes } from "./actionTypes";
 const Reducer =(state:typeof initialState,action: ActionTypes )=> {
    switch(action.type) {
        case "ADD_TASK":
            const task:ITask ={
                id:state.tasks?state.tasks.length+1:1,
                title:action.payload?.title,
                description:action.payload?.description
            }
            return {
                ...state,
                tasks:[...state.tasks,task]
            }
        case "ADD_TASKS":
            return{
                ...state,
                tasks:action.payload
            }
        case "UPDATE_TASK":
            const tasks:ITask[] =state.tasks;
             const index:number = tasks.findIndex(task=>task.id===action.payload.id);
             tasks[index]=action.payload;
             return{
                 ...state,
                 tasks:tasks
             }
        case "DELETE_TASK":
            const newTasks= state.tasks.filter(task=>task.id!==action.payload);
             return{
                 ...state,
                 tasks:newTasks
             }
        default: 
             return state
    }
}

export default Reducer;