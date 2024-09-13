import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Header() {

    const [token, setToken] = useState("")
    useEffect(() => {
        setToken(sessionStorage.getItem('token'))
    }, [])

    const navigate = useNavigate()
    const handleLogout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('userDetails')
        navigate('/')
        window.location.reload();
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div class="container ">
                    <a class="navbar-brand d-flex " href="#">
                   <div class='p-2'> 
                    <i class="fa-solid fa-bars-progress fa-beat-fade " ></i>
                     </div>
                     
                     <div className='p-2'>
                     <i class="fa-solid fa-d" style={{color:" #a8c2f0"}}></i>
                     o tasks
                     </div>
                    </a>

                    {/* RESPONSIVE MENU BAR */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* NAVLINKS */}
                    <div class="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
        
                        <div className='ms-auto'>
                            {
                                token ?
                                    <button className='btn btn-outline-secondary' onClick={handleLogout}>
                                        <i className="fa-solid fa-right-from-bracket" />
                                        Logout
                                    </button>
                                    :
                                    <div>
                                        <Link className='btn btn-outline btn-secondary' to={'/auth'}>Sign In</Link>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header