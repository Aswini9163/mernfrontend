import React, { useContext, useState } from 'react'
import Adminstyle from './Admin.module.css'
import banner from '../Assets/banner.png'
import axios from 'axios'
import {NavLink, useNavigate} from 'react-router-dom'
import { Store } from '../App'


const Admin = () => {
    const [token,setToken] = useContext(Store)
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate= useNavigate();

    const Add= (e)=>{
        e.preventDefault();
        axios.post(`https://mernbackend-rn59.onrender.com/login`,{email,password})
        .then((res)=>{
            //console.log(res)
            setToken(res.data.token)

            /*if(res.data=="NoUser"){
                alert("No user found")
            }
            else if(res.data=="Invalid"){
                alert("Invalid")
            }
            else{
                alert("Valid")
               // navigate("/admindashboard")
            }*/
        })
        .catch((err)=>{
            console.log(err)
        })

    }
    if(token){
        navigate("/admindashboard")
    }
   
  return (
       <main>
               <section className={Adminstyle.breadcrumb}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>Admin Login</h1>
                                    </div>
                                </div>
                            </div>
                </section>
                <section className="py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>

                                       <img src={banner} className={Adminstyle.banner} alt=''/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-auto mx-auto">
                                        <form className={`${Adminstyle.bx_shadow} p-4 `} onSubmit={Add}>
                                         
                                        <div className="input-group mb-3 ">
                                                <div className="input-group-prepend">
                                                    <span className={`input-group-text ${Adminstyle.radius}`}>
                                                    <i className="bi bi-person"></i>
                                                    </span>
                                                </div>
                                                
                                            <input type='text' name='email' value={email} placeholder='Email'className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>
                                           
                                            
                                            
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className={`input-group-text ${Adminstyle.radius}`}>
                                                    <i className="bi bi-lock"></i>
                                                    </span>
                                                </div>
                                            
                                           
                                                <input type='password' name='password' value={password} placeholder='Password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                                            </div>
                                           
                                            <div className='mb-3'>
                                                <input type='submit' value="Admin Login"/>
                                            </div>
                                            <div className='d-flex justify-content-between'>
                                            <div >
                                            <NavLink to="/forgotpass">
                                                        Forgot Password
                                                    </NavLink>

                                                </div>
                                                <div>
                                                    <NavLink to="/register">
                                                        Click here for new user
                                                    </NavLink>
                                                </div>
                                                </div>
                                               
                                        </form>
                                       
                                    </div>
                                </div>
                            </div>
                </section>
                </main>
  )
}

export default Admin