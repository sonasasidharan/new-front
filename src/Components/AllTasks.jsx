import React from 'react'
import { deleteTask } from '../Services/allApis'
import { useState,useEffect} from 'react'
import { allTasks } from '../Services/allApis'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import EditTask from './EditTask'
import { update } from '../Services/allApis'




function AllTasks() {

 

// to get newly added task instatntly
  const [getTasks,setGetTasks] = useState({})


  // to get updated task instantly
  const [upTask,setUpTask] = useState({})
  

    //  update when a task done clicked without refresh page
    const [clickStatus, setClickStatus] = useState({})
    
    //  update when a task deleted without refresh page
    const [deleteStatus, setDeleteStatus] = useState({})  
   

    // task id for path parameter
    const {tid}=useParams()

    const[allTtask,setAllTtask]=useState([])

    useEffect(()=>{
      (sessionStorage.getItem('token')) 
        getData()
    },[clickStatus,deleteStatus,getTasks,upTask])
    


    const getData=async()=>{
        const header={"Authorization":`Bearer ${sessionStorage.getItem('token')}`}
        const result=await allTasks(header)
        // console.log(result)
        if(result.status==200){
            setAllTtask(result.data)
            setGetTasks(result)
            setUpTask(result)
           
        }
        else{
            console.log(result.response.data)
        }
    }

    const handleDelete=async(id)=>{
        const token=(sessionStorage.getItem('token'))
        console.log(id)
        const header={
          "Content-Type":"application/json",
           "Authorization":`Bearer ${token}`
        }
        const result=await deleteTask(id,header)
          if(result.status==200){
            console.log(result)
            toast.success("Task deleted ")
            setDeleteStatus(result)
            getData()
          }
          else{
            console.log(result)
            toast.error(res.response.data)
          }
        
      }

      
    const [taskData, setTaskData] = useState({
        taskTitle: "", description: "", date: "", done: false
    })

    // to click complete button
    const click = async (id,presentState) => {
        const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
        const newState = !presentState;
        const result = await update(id, { done: newState }, header)
        if (result.status === 200) {
            setTaskData({
                ...taskData, done: newState
            })
           
            setClickStatus(result)
        }
        else {
            console.log(result)
            toast.error(result.response.data)
        }
    }
  
  return (
   <>
            <div className='border border-3 p-3'>
          
        {
            allTtask.length>0?
            allTtask.map(item=>(
                <div className='d-flex justify-content-between border shadow mb-3 p-3 rounded'>
                     <h4>{item.taskTitle}</h4>


                  <div className=' d-flex align-items-end'>
                     <Link to={`/details/${item._id}`} >

                     <span  style={{color:'teal'}}>view details</span>
                     </Link>
                     </div>
             
                <div>
                
                   <EditTask task={item}/> 

                   <div className='d-flex' >
                          {
                               !item.done ?
                                 <button onClick={() => click(item._id, item.done)} className='btn btn-outline-primary'>
                                  <i class="fa-solid fa-x" style={{color:' #f31616'}}></i>
                                 </button>
                                     :
                                 <button onClick={() => click(item._id, item.done)} className='btn btn-outline-primary'>    
                                 <i class="fa-regular fa-square-check" style={{ color: ' #029c4c' }}></i>
                                 </button>
                           }
                         </div>
                 
                  <button className='btn mt-3'  onClick={()=>{handleDelete(item?._id)  }}>
                  <i class="fa-solid fa-trash fa-xl" style={{color:" #3267c3"}} />
                  </button>
                </div>
              </div>
            ))
            :
            <h3 className='text-center '> No tasks</h3>
        }
       
      </div>
   </>
  )
}

export default AllTasks