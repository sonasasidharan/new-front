import React from 'react'
import { speceficTask } from '../Services/allApis'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'


function TaskDetails() {

    const [task, setTask] = useState([])

    // Task id from path parameter
    const { tid } = useParams()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
        const result = await speceficTask(tid, header)
        if (result.status == 200) {
            setTask(result.data)
        }
        else {
            console.log(result.response.data)
        }
    }


  return (
  <>
  <Header/>
 
 

  

           <div className='d-flex justify-content-center p-5'>
           <div className='p-3 border shadow border-3 rounder  d-flex justify-content-center align-items-center   ' style={{ width: '400px', height: '400px',backgroundImage:'url(https://tse4.mm.bing.net/th?id=OIP.lJR6kMZ1njSbHSSc1d0NNAHaHa&pid=Api&P=0&h=180)',
                   backgroundRepeat:'no-repeat',backgroundSize:'100%',color:'white' }}>
                <div className=''>
             
              
                  <h3>{task.taskTitle}</h3>
                            <h6>{task.description}</h6>
                            <h6 className='mt-5'>Date : {new Date(task.date).toLocaleDateString('en-IN', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}</h6>
                  </div>
                  </div>
           </div>
          
      
         <div className='text-center' style={{ fontSize: '30px', textDecoration: "none" }}>
          <Link to={'/dash'} style={{ textDecoration: "none" }}>
            <i class="fa-solid fa-backward fa-beat" style={{ color: "#FFD43B", }} />
            {" "}
            BACK</Link>
        </div> 
     
        

    

  </>
  )
}

export default TaskDetails