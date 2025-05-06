import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Adminstyle from './Admin.module.css'
import axios from 'axios';

const EditOffer = () => {
    const {eid} = useParams();
      const [offername, setOffername]=useState("");
      const [offerdes, setOfferdes] = useState("");
      const navigate = useNavigate();
      useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/offer/${eid}`)
        .then((res)=>{
          //console.log(res)
          setOffername(res.data.offername)
          setOfferdes(res.data.offerdes)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])

      const editOffer = (e)=>{
        e.preventDefault();
        axios.put(`https://mernbackend-rn59.onrender.com/offer/${eid}`,{offername,offerdes})
        .then((res)=>{
            alert('Offer edited successfully')
            navigate('/admindashboard/deleteoffer')
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
                                                   <input type="text" name="offer" placeholder="Offer Name" value={offername} className="form-control mb-4"onChange={(e)=>setOffername(e.target.value)}/>
                                                   <textarea type="text" name="offer" placeholder="Offer Description" value={offerdes}className="form-control mb-4"onChange={(e)=>setOfferdes(e.target.value)}></textarea>
                                                   <input type="submit" value="Edit Offer" onClick={editOffer}className='ps-4 pe-4'/>
                                                 </form>                                               
                                  </div>
                              </div>
                          </div>
                      </section>
  )
}

export default EditOffer