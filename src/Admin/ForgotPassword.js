import React, { useState } from 'react'
import Adminstyle from './Admin.module.css'
import axios from 'axios';

const ForgotPassword = () => {
     const [email, setEmail]= useState("");

     const Add = (e)=>{
       
        e.preventDefault();
        axios.post(`https://mernbackend-rn59.onrender.com/forgotpass`,{email})
        .then((res)=>{
          console.log(res)
          alert("category added sucessfully")
        })
        .catch((err)=>{
          console.log(err)
        })
        
     }
  return (
    <main>
                   <section className={Adminstyle.breadcrumb}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1>Forgot Password</h1>
                                        </div>
                                    </div>
                                </div>

                    </section>
                    <section className="py-4">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 mx-auto">
                                        <form className={`${Adminstyle.bx_shadow} p-4`} onSubmit={Add}>
                                            <div className='mb-4'>

                                        <input type="text" name="email" placeholder="Email" value={email} className="form-control"onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>
                                        <div className='mb-3'>
                                                <input type='submit' value="Get Password"/>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                    </div>
                                    </section>
                    </main>
  )
}

export default ForgotPassword