import React from 'react'
import { useState,useEffect } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addTask } from '../Services/allApis';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateTask() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        (sessionStorage.getItem('token')) 
       }, [])

    const [taskData, setTaskData] = useState({
        taskTitle: "", description: "", date: "", done: false
    })



    const createTask = async () => {
        const { taskTitle, description, date } = taskData
        if (!taskTitle || !description || !date) {
            toast.warning("Provide Complete Data!!")
        }
        else {
            try {
                const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
                const result = await addTask(taskData, header);
                console.log(result)
                if (result.status === 200) {
                    toast.success('create task successfully');
                    setTaskData({
                        taskTitle: "", description: "", date: ""
                    });
                    handleClose()
                } else {
                    toast.error("discription/task title already exist!!!");
                }
            } catch (error) {
                toast.error("An error occurred. Please try again.");
            }
        }
    }
  return (
   <>  
                         <div className='text-center '>
             
                <button className='btn btn-primary mb-4' onClick={handleShow}>
                <i class="fa-solid fa-plus" style={{color:" #fcfcfc;"}}></i>Create Task</button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Task!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="email" required placeholder="Task title" onChange={(e) => { setTaskData({ ...taskData, taskTitle: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" required rows={3} placeholder='Describe your task here..' onChange={(e) => { setTaskData({ ...taskData, description: e.target.value }) }} />
                        </Form.Group>
                        <FloatingLabel controlId="floatingInput" label="Due Date" className="mb-2 w-50">
                            <Form.Control type="date" required placeholder=""  onChange={(e) => { setTaskData({ ...taskData, date: e.target.value }) }} />
                        </FloatingLabel>
                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createTask}>
                        Add Task
                    </Button>
                </Modal.Footer>
            </Modal>
   </>
  )
}

export default CreateTask