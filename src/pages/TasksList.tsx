import {useContext,useState} from "react";
import TaskCard from "../components/TaskCard";
import  {Context} from "../context/Context"
import {Wrapper,ContentWrapper,CardWrapper} from "../components/StyledComponents";
import CustomHeader from "../components/CustomHeader";
import CustomModal from "../components/CustomModal";

const TasksList =()=>{
const {tasks,dispatch } =useContext(Context);
const [modal, setModal] = useState<boolean>(false);
const toggleModal = () => setModal(!modal);
const handleTaskDelete = (id:number)=>{
    dispatch({type:"DELETE_TASK",payload:id})
    } 
    return(
        <Wrapper >
            <CustomHeader buttonLabel="Add Task" onClick={toggleModal}  />
            
        <ContentWrapper>
            {
                tasks.length===0&&<p className="text-center">No Task</p>
            }
            {
                tasks&&tasks.map((task,index:number)=>(
                    <CardWrapper  key={task.id}>
                        <h3>{index+1}-</h3>
                        <TaskCard task={task} onDelete={handleTaskDelete}  />
                    </CardWrapper>
                    
                ))
            }

        </ContentWrapper>
          {modal&&<CustomModal modal={modal} toggleModal={toggleModal}  />}          
        </Wrapper>
    )

}
export default TasksList;