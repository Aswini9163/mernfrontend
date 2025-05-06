import axios from 'axios';
import React, { useState } from 'react'
import Adminstyle from './Admin.module.css'

const AddOffer = () => {
  const [offername, setOffername]=useState("");
  const [offerdes, setOfferdes] = useState("");

  const Add =(e)=>{
    e.preventDefault();
    axios.post(`https://mernbackend-rn59.onrender.com/offer`,{offername,offerdes})
    .then((res)=>{
      console.log(res)
      alert("Offer added successfully")
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
                                                <input type="text" name="offer" placeholder="Offer Name" value={offername} className="form-control mb-4"onChange={(e)=>setOffername(e.target.value)}/>
                                                <textarea type="text" name="offer" placeholder="Offer Description" value={offerdes}className="form-control mb-4"onChange={(e)=>setOfferdes(e.target.value)}></textarea>
                                                <input type="submit" value="Add Offer" className='ps-4 pe-4'/>
                                              </form>                                               
                               </div>
                           </div>
                       </div>
                   </section>
  )
}

export default AddOffer