import React from 'react'
import { useState } from 'react';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { updateTtask} from '../Services/allApis';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditTask({task}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        // formatting date to get the date into the form field
        const oldDate = (dateString) => {
            if (!dateString) return ''
            const date = new Date(dateString)
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const day = String(date.getDate()).padStart(2, '0')
            return `${year}-${month}-${day}`
        }

    const [taskData, setTaskData] = useState({
        id: task._id, taskTitle: task.taskTitle, description: task.description, date: oldDate(task.date) 
    })

    const updateTask = async () => {
        const { id, taskTitle, description, date} = taskData
        if (!taskTitle || !description || !date) {
            toast.warning("Provide Complete Data!!")
        }
        else {
            const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
            const result = await updateTtask(taskData.id, taskData, header)
            // console.log(result)
            if (result.status == 200) {
                toast.success(`Task Updated Successfully!`)
                handleClose()
            }
            else {
                toast.error(result.response.data)
            }
        }
    }

  return (
    <>
              <button className=' btn ' onClick={handleShow}>
              <i class="fa-solid fa-pen-to-square fa-xl" style={{color:" #3267c3",border:'none'}}></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="email" placeholder="Task title" value={taskData.taskTitle} onChange={(e) => { setTaskData({ ...taskData, taskTitle: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder='Describe your task here..' value={taskData.description} onChange={(e) => { setTaskData({ ...taskData, description: e.target.value }) }} />
                        </Form.Group>
                        <FloatingLabel controlId="floatingInput" label="Due Date" className="mb-2 w-50">
                            <Form.Control type="date" required placeholder=""  value={taskData.date} onChange={(e) => { setTaskData({ ...taskData, date: e.target.value }) }} />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateTask}>
                        Update Task
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default EditTask