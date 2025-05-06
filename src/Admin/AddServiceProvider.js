import React, { useState } from 'react'
import axios from 'axios';
import Adminstyle from './Admin.module.css'

const AddServiceProvider = () => {
  const [serviceproname, setServiceproname]= useState("");
  const [businessname, setBusinessname]=useState("");
  const [exp, setExp] = useState("");
  const [phone,setPhone] = useState("");
  const [email, setEmail]= useState("");
  const [businessadd, setBusinessadd]= useState("");


  const Add =(e)=>{
    e.preventDefault();
    axios.post(`https://mernbackend-rn59.onrender.com/service`,{serviceproname,businessname,exp,phone,email,businessadd})
    .then((res)=>{
      //console.log(res)
      alert("successfully added")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
   <section className="py-5">
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 m-auto">
                                   <form className={`${Adminstyle.bx_shadow} p-4`} onSubmit={Add}>
                                                <input type="text" name="serviceproname" placeholder="Service Provider Name" value={serviceproname} className="form-control mb-4"onChange={(e)=>setServiceproname(e.target.value)}/>
                                                <input type="text" name="businessname" placeholder="Business Name" value={businessname} className={`form-control mb-4 ${Adminstyle.img}`}onChange={(e)=>setBusinessname(e.target.value)}/>
                                                <input type="text" name="exp" placeholder="Experience" value={exp}className="form-control mb-4"onChange={(e)=>setExp(e.target.value)}/>
                                                <input type="text" name="phone" placeholder="Phone" value={phone}className="form-control mb-4"onChange={(e)=>setPhone(e.target.value)}/>
                                                <input type="text" name="email" placeholder="Email" value={email} className="form-control mb-4"onChange={(e)=>setEmail(e.target.value)}/>
                                                <textarea type="text" name="businessadd" placeholder="Business address" value={businessadd}className="form-control mb-4"onChange={(e)=>setBusinessadd(e.target.value)}></textarea>
                                                <input type="submit" value="Add Service Provider" className='ps-4 pe-4'/>
                                              </form>                                               
                               </div>
                           </div>
                       </div>
                   </section>
  )
}


export default AddServiceProvider