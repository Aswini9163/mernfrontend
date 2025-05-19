import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Innerstyle from './Innerpages.module.css'
import axios from 'axios';
import SubServices from './SubServices';

const ServiceDetails = () => {
    const {id}= useParams();
    const [data, setData] = useState("");

    useEffect(()=>{
      axios.get(`https://mernbackend-rn59.onrender.com/category/${id}`)
      .then((res)=>{
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    })
  return (
     <main>
               <section className={Innerstyle.breadcrumb}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>{data.catname}</h1>
                                    </div>
                                </div>
                            </div>
                </section>
                <section className="py-4">
                            <div className="container">
                                <div className="row">
                                  <div className='col-md-12'>
                                    <div className='text-center mb-3'>

                                    <img src={`https://mernbackend-rn59.onrender.com/uploads/${data.filename}`}alt={data.catname} className={Innerstyle.style}/>
                                    </div>
                                    <p>{data.catdes}</p>

                                  </div>
                                
                                </div>
                            </div>
                </section>
                <section>
                <SubServices/>
                </section>
               
            </main>
  )
}

export default ServiceDetails
