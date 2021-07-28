import React,{useEffect, useContext} from 'react';
import  {Context} from "../context/Context"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup, Form, Label, Input  } from 'reactstrap';
import {ITask}  from "../context/Context"
import { useFormik} from 'formik';

interface IModal{
    modal:boolean,
    task?:ITask
    toggleModal:()=>void
    fetchTask?:()=>void
}

interface Values {
    title: string;
    description: string;
  }
const CustomModal:React.FC<IModal> =({modal,task,toggleModal,fetchTask})=>{
    const {dispatch } =useContext(Context);
  const taskInitialValues:Values ={
        title:"",
        description:""
    };

    
    useEffect(()=>{
        if(task){
            formik.setFieldValue("title",task?.title);
            formik.setFieldValue("description",task?.description);
        }
    
        
    },[]);
     
    const formik = useFormik({
        initialValues:taskInitialValues ,
        onSubmit: values => {
            if(task){
                dispatch({type:"UPDATE_TASK",payload:{
                    id:task.id,
                    title:values.title,
                    description:values.description
                }});
                fetchTask&&fetchTask();
            }
            else {
                dispatch({type:"ADD_TASK",payload:values});
            }
            
            toggleModal();
         
        },
      });
      return (
            <Modal isOpen={modal} toggle={toggleModal } unmountOnClose={true}  >
            <Form  onSubmit={formik.handleSubmit}>
             <ModalHeader   className="w-auto mx-auto " >{task?"Update Task":"Add Task"}</ModalHeader>
             <ModalBody>
             
              <FormGroup>
              <Label  for="title" className="mb-2 ">Title</Label>
                <Input 
                className="mb-3"  
                type="text" 
                name="title" 
                id="title" 
                onChange={formik.handleChange}
                value={formik.values.title}
                required
                />
             </FormGroup>
             <FormGroup >
                <Label  for="description" className="mb-2">Description</Label>
                <Input  
                 className="mb-3" 
                 type="textarea" name="description" 
                 id="description" 
                 onChange={formik.handleChange}
                 value={formik.values.description}
                 required
                  />
             </FormGroup>
              
              </ModalBody>
            <ModalFooter>
             
            <Button color="primary"  className="d-flex align-center" type={'submit'} disabled={formik.isSubmitting}  >{task?"Update":"Add"}</Button>
            <Button color="secondary"  onClick={toggleModal}>Cancel</Button>
            </ModalFooter>
            </Form>
      </Modal>

      );
   
}

export default CustomModal;