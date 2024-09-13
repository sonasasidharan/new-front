import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link} from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='w-100 ' style={{backgroundColor:'#592a9c', color:'white'}}>
    <Row>
      <Col className='d-flex flex-column align-items-center'> 
      <h4>Task management 2024</h4>
        <p  style={{textAlign:'justify'}}> Lorem Ipsum has been the industry'<br/>
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make<br/>
           a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br/>
            remaining essentially unchanged.</p></Col>
   
   
       
   
       <Col className='d-flex flex-column align-items-center'> 
         <h4>links</h4>
            <Link to={'/dash'} style={{color:'white'}}>Dashboard</Link><br/>
             <Link to={'/auth'}  style={{color:'white'}} >Auth</Link><br/>
        </Col>
       
      

      
    <Col className='d-flex flex-column align-items-center '>
      <h4>References</h4>
        <a href="https://react-bootstrap.github.io/"  target='_blank' style={{color:'white'}} >React-bootstrap</a><br/>
        <a href="https://react.dev/" target='_blank'  style={{color:'white'}} >React</a><br/>
        <a href="https://getbootstrap.com/" target='_blank'  style={{color:'white'}}>bootstrap</a><br/>
        </Col>

      
    <div className='text-center'>
        <p> &copy; do tasks 2024</p>
    </div>
    </Row>
    </div>
  </>
  )
}

export default Footer