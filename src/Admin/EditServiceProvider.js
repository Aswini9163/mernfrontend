import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Adminstyle from './Admin.module.css'
import axios from 'axios';

const EditServiceProvider = () => {
    const {eid} = useParams();
       const [serviceproname, setServiceproname]= useState("");
        const [businessname, setBusinessname]=useState("");
        const [exp, setExp] = useState("");
        const [phone,setPhone] = useState("");
        const [email, setEmail]= useState("");
        const [businessadd, setBusinessadd]= useState("");
      const navigate = useNavigate();
      useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/service/${eid}`)
        .then((res)=>{
          //console.log(res)
          setServiceproname(res.data.serviceproname)
          setBusinessname(res.data.businessname)
          setExp(res.data.Exp)
          setPhone(res.data.phone)
          setEmail(res.data.email)
          setBusinessadd(res.data.businessadd)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])

      const edit = (e)=>{
        e.preventDefault();
        axios.put(`https://mernbackend-rn59.onrender.com/service/${eid}`,{serviceproname,businessname,exp,phone,email,businessadd})
        .then((res)=>{
            alert('service edited successfully')
            navigate('/admindashboard/deleteservice')
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
                                     <form className={`${Adminstyle.bx_shadow} p-4`}>
                                                  <input type="text" name="serviceproname" placeholder="Service Provider Name" value={serviceproname} className="form-control mb-4"onChange={(e)=>setServiceproname(e.target.value)}/>
                                                  <input type="text" name="businessname" placeholder="Business Name" value={businessname} className={`form-control mb-4 ${Adminstyle.img}`}onChange={(e)=>setBusinessname(e.target.value)}/>
                                                  <input type="text" name="exp" placeholder="Experience" value={exp}className="form-control mb-4"onChange={(e)=>setExp(e.target.value)}/>
                                                  <input type="text" name="phone" placeholder="Phone" value={phone}className="form-control mb-4"onChange={(e)=>setPhone(e.target.value)}/>
                                                  <input type="text" name="email" placeholder="Email" value={email} className="form-control mb-4"onChange={(e)=>setEmail(e.target.value)}/>
                                                  <textarea type="text" name="businessadd" placeholder="Business address" value={businessadd}className="form-control mb-4"onChange={(e)=>setBusinessadd(e.target.value)}></textarea>
                                                  <input type="submit" value="edit Service Provider" onClick={edit}className='ps-4 pe-4'/>
                                                </form>                                               
                                 </div>
                             </div>
                         </div>
                     </section>
  )
}

export default EditServiceProvider