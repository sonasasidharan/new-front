import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import CreateTask from '../Components/CreateTask'
import AllTasks from '../Components/AllTasks'
import { Row,Col } from 'react-bootstrap'





function Dash() {
  
  return (
    <>
    <Header/>
    <div >
    {/* style={{color:'#592a9c'}} */}
    <h1  style={{color:'grey'}}>*Get Things Done *</h1>
      {/* <div className='d-flex justify-content-between p-5'> */}
        <Row className='p-5'>
            <Col sm='1' md='1' >
                 <CreateTask/> 
            </Col>
            <Col sm='6' md='10'>
                <AllTasks/>
            </Col>
        </Row>
              
         {/* </div> */}
      </div>


    <Footer/>

    </>
  )
}

export default Dash