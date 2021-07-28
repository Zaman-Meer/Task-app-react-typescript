import {ITask} from "../context/Context"
import { Button } from 'reactstrap';
import {TaskCardWrapper,TaskTitle } from "../components/StyledComponents";

interface ITaskCardProps {
    task:ITask,
    onDelete:(id:number)=> void
}


const TaskCard:React.FC<ITaskCardProps> = ({task,onDelete}) =>{
        const handleDelete=()=>{
        onDelete(task.id)
        }
    return(
        <TaskCardWrapper >
       
            <TaskTitle to={`/task/${task.id}`}>{task.title}</TaskTitle>
            <Button color="danger" size="sm"  onClick={handleDelete}>Delete</Button>
   
        </TaskCardWrapper>
        )
}

export default TaskCard;