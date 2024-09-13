import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'


function Home() {
    
    const [token, setToken] = useState("")

    

    useEffect(() => {
      if (sessionStorage.getItem('token')) {
        setToken(true)
    }
    else {
        setToken(false)
    }

    }, [])

  return (
    <>
    <Header/>
   
     <div>

     <div className='w-100 d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
    <div className='row p-5 shadow'>
      <div className='col'>
        <h1>Organize Your Work and Life</h1>
        <p>A goal without a plan is just a wish,so start planning now!! </p>
        <div>
        
        {
                                token ?
                                    
                                 <Link to={'/dash'} className='btn btn-primary'>   
                                    <i class="fa-solid fa-plus" style={{color:" #fcfcfc;"}}></i>
                                        create tasks
                                    </Link>
                                    
                                    :
                                    <div>
                                       <Link to={'/auth'} className='btn btn-primary'>Explore</Link> 
                                    </div>
                            }
        </div>
      </div>
      <div className='col'>
        <img src="https://static.vecteezy.com/system/resources/previews/002/531/083/large_2x/task-list-illustration-vector.jpg"  className='img-fluid ' alt="img"
         style={{height:'300px',width:'100%'}} />
      </div>
    </div>
  </div>

        
            
        <div className='d-flex justify-content-center align-items-center ' >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/78lUbHXCHLo?si=ZPAnJoFu7-PMmlHH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
        

            <div className='mt-3 p-5'>
                <div className='d-flex mt-2 flex-row justify-content-between'>
                
                <div class="card" style={{width: '18rem'}}>
            <img src="http://thedigitalprojectmanager.com/wp-content/uploads/2017/04/38-expect-best-plan-for-worst-denis-waitley.jpg" style={{height:'300px'}} class="card-img-top" alt="..."/>
            </div> 
                
                <div class="card" style={{width: '18rem'}}>
            <img src="http://www.thedigitalprojectmanager.com/wp-content/uploads/2017/04/137-quote-price-inaction-meister-eckhart.jpg" style={{height:'300px'}} class="card-img-top" alt="..."/>
            </div> 
            <div class="card" style={{width: '18rem'}}>
            <img src="https://thedigitalprojectmanager.com/wp-content/uploads/2017/04/109-quote-good-management-average-people-superior-work-john-rockefeller.jpg" style={{height:'300px'}} class="card-img-top" alt="..."/>
            </div> 
                
                <div class="card" style={{width: '18rem'}}>
            <img src="https://thedigitalprojectmanager.com/wp-content/uploads/2017/04/10-quote-leadership-is-doing-the-right-things-peter-drucker.jpg" style={{height:'300px'}} class="card-img-top" alt="..."/>
            </div> 
            </div>
            </div> 
                    
 
     </div>
    <Footer/>
    
    </>
  )
}

export default Home