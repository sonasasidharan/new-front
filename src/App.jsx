
import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify'
import { Routes,Route } from 'react-router-dom'



import Auth from './Pages/Auth';
import Home from './Pages/Home';
import Dash from './Pages/Dash';
import TaskDetails from './Pages/TaskDetails';

import { TokenAuthContext } from './ContextApis/AuthContextapis';



function App() {

  const{authStatus,setAuthStatus}=useContext(TokenAuthContext)


  return (
    <>
   <Routes>
    <Route path='/auth' element={<Auth/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/dash' element={authStatus?<Dash/>:<Home/>}></Route>
    <Route path='/details/:tid' element={authStatus?<TaskDetails/>:<Home/>}></Route>
   </Routes>
   <ToastContainer/>
   
    </>
  )
}

export default App
