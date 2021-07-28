import {useState,useEffect,useContext,useCallback} from "react";
import { useParams } from "react-router-dom";
import  {Context, ITask} from "../context/Context"
import {Wrapper,ContentWrapper} from "../components/StyledComponents";
import CustomHeader from "../components/CustomHeader";
import CustomModal from "../components/CustomModal";
import { Link } from "react-router-dom";

interface IParams{
    id:string
}

const Task =()=>{
const [task,setTask]=useState<ITask>({id:0,title:"",description:""})
const {tasks} =useContext(Context);
const [modal, setModal] = useState<boolean>(false);
const toggleModal = () => setModal(!modal);
let {id}= useParams<IParams>();
const fetchTask= useCallback(()=>{
    if(tasks.length>0){
        const FindTask= tasks.filter(tk=>tk.id===parseInt(id))[0]
        setTask(FindTask)
    }
},[tasks,id])
useEffect(()=>{
    fetchTask();
},[])
    return(
        <Wrapper >
            <CustomHeader buttonLabel="Update Task" onClick={toggleModal}  />
            
        <ContentWrapper>
            <>
            <Link  className="text-center text-dark" to="/" >See All Tasks</Link>
            <hr/>
           <div className="d-flex flex-column p-3 ">
            <h5>Title</h5>
            <p >{task?.title}</p>
         
            <h5>Description:</h5>
            <p>{task?.description}</p>
            </div>
            </>
        </ContentWrapper>
          {modal&&<CustomModal modal={modal} task={task} fetchTask={fetchTask} toggleModal={toggleModal}  />}          
        </Wrapper>
    )

}
export default Task;