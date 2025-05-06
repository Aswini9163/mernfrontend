import React, { useState } from 'react'
import Innerstyle from './Innerpages.module.css'
import Adminstyle from '../Admin/Admin.module.css'
import axios from 'axios'

const ContactUs = () => {
    const [name,setName] = useState("")
     const [phone,setPhone] = useState("");
                const [email, setEmail]= useState("");
                const [subject, setSubject]= useState("");
                const [message, setMessage]= useState("");
    const Add = (e)=>{
        e.preventDefault();
        axios.post(`https://mernbackend-rn59.onrender.com/contactus`,{name,phone,email,subject,message})
        .then((res)=>{
           // console.log(res)
           alert("mail sent")
        })
        .catch((err)=>{
            console.log(err)
        })
    }


  return (
    <main>
              <section className={Innerstyle.breadcrumb}>
                           <div className="container">
                               <div className="row">
                                   <div className="col-md-12">
                                       <h1>Contact Us</h1>
                                   </div>
                               </div>
                           </div>
               </section>
               <section className="py-5">
                                      <div className="container">
                                          <div className="row">
                                              <div className="col-md-8 m-auto">
                                                  <form className={`${Adminstyle.bx_shadow} p-4`} onSubmit={Add}>
                                                   <div className='row'>
                                                           <div className='col-md-6'>
                                                           <div className='mb-4'>
                                                            <input type="text" name="name" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                                                           </div>
                                                           </div>
                                                          
                                                           <div className='col-md-6'>
                                                           <div className='mb-4'>
                                                           <input type="text" name="phone" placeholder="Phone"className="form-control"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
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
                                                                   <input type="submit" value={'Send Message'} className='pe-4 ps-4'/>
                                                               </div>
   
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

export default ContactUs