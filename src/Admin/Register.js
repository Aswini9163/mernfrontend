import React, { useState } from 'react'
import Adminstyle from './Admin.module.css'
import axios from 'axios';
import register from '../Assets/registration.jpg'
import {useNavigate} from 'react-router-dom'

const Register = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate= useNavigate();
    const Add = (e)=>{
        e.preventDefault();
        axios.post(`https://mernbackend-rn59.onrender.com/signup`,{name,email,password,confirmpassword,phone,address})
        .then((res)=>{
           // console.log(res)
            alert('register successful')
            navigate('/admin')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    return(
            <main>
                <section className={Adminstyle.breadcrumb}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Admin Register</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row ">
                             <div className="col-md-6">
                                <div>
                                      <img src={register} className={Adminstyle.register} alt=''/>       
                                </div>
                                </div>
                            <div className="col-md-5 m-auto">
                                <form className={`${Adminstyle.bx_shadow} p-4`} onSubmit={Add}>
                                             <input type="text" name="name" placeholder="Name" value={name} className="form-control mb-4"onChange={(e)=>setName(e.target.value)}/>
                                             <input type="text" name="email" placeholder="Email" value={email} className="form-control mb-4"onChange={(e)=>setEmail(e.target.value)}/>
                                             <input type="password" name="password" placeholder="Password" value={password}className="form-control mb-4"onChange={(e)=>setPassword(e.target.value)}/>
                                             <input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmpassword}className="form-control mb-4"onChange={(e)=>setConfirmpassword(e.target.value)}/>
                                             <input type="text" name="phone" placeholder="Phone" value={phone}className="form-control mb-4"onChange={(e)=>setPhone(e.target.value)}/>
                                             <textarea type="text" name="address" placeholder="Address"value={address} rows={3}className="form-control mb-4"onChange={(e)=>setAddress(e.target.value)}></textarea>
                                             <input type="submit" value="Register" className='ps-4 pe-4'/>
                                           </form>                                               
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Register