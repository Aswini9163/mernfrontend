import React, { useState } from 'react'
import Adminstyle from '../Admin/Admin.module.css'

import { useParams } from 'react-router-dom'
import axios from 'axios';

const Booking = () => {
    const {cat, subcat,service} = useParams();
    const [catname, setCatname]= useState(cat || "");
    const [subcatname, setSubcatname]=useState(subcat || "");
    const [serviceproname, setServiceproname]= useState(service || "");
    const [bdate,setBdate] = useState("");
      const [btime, setBtime]= useState("");
     const [phone,setPhone] = useState("");
      const [email, setEmail]= useState("");
      const [subject, setSubject]= useState("");
      const [message, setMessage]= useState("");
      const Add =(e)=>{
        e.preventDefault();
        axios.post(`https://mernbackend-rn59.onrender.com/bookservice`,{catname,subcatname,serviceproname,bdate,btime,phone,email,subject,message})
        .then((res)=>{
            //console.log(res.data)
            alert("service booked successfull")
            setCatname("")
            setSubcatname("")
            setServiceproname("")
            setBdate("")
            setBtime("")
            setPhone("")
            setEmail("")
            setSubject("")
            setMessage("")
          
        })
        .catch((err)=>{
            console.log(err)
        })
    
    }
  return (
    <main>
        <div className="container">
                                               <div className="row">
                                                   <div className="col-md-12">
                                                       <form className={`${Adminstyle.bx_shadow} p-4`} onSubmit={Add}>
                                                        <div className='row'>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                 <input type="text" name="catname" placeholder="Category Name" className="form-control" value={catname} onChange={(e)=>setCatname(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                   <input type="text" name="subcatname" placeholder="subcategory Name"  className="form-control"value={subcatname} onChange={(e)=>setSubcatname(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                <input type="text" name="serviceproname" placeholder="Service Provider Name"  className="form-control"value={serviceproname} onChange={(e)=>setServiceproname(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                <input type="date" name="bdate"  className="form-control"value={bdate} onChange={(e)=>setBdate(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                <input type="time" name="time"  className="form-control" value={btime} onChange={(e)=>setBtime(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                <input type="number" name="phone" placeholder="Phone"className="form-control"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                <input type="text" name="email"   placeholder="Email"className="form-control"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                <div className='mb-4'>
                                                                <input type="text" name="subject"   placeholder="subject"className="form-control"value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                                                                </div>
                                                                </div>
                                                                <div className='col-md-12'>
                                                                <div className='mb-4'>
                                                                <textarea type="text" name="message"  placeholder="message"className="form-control"value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                                                </div>
                                                                </div>
                                                             
                                                                <div className='col-md-6'>
                                                                    <div className='mb-1'>
                                                                        <input type="submit" value={'Book Service'} className='pe-4 ps-4'/>
                                                                    </div>
        
                                                </div>
                                                                
                                                            
                                                        </div>
                                                                   
                                                                  </form>                                               
                                                   </div>
                                               </div>
                                           </div>
    </main>
  )
}

export default Booking