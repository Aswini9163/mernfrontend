import React, { useEffect, useState } from 'react'
import Innerstyle from './Innerpages.module.css'
import Adminstyle from '../Admin/Admin.module.css'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';


const Services = () => {
 
    const [data, setData] = useState([]);
      useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/category`)
        .then(res => {
          // console.log(res)
          setData(res.data);
           
        })
        .catch((err)=>{
            console.log(err);
        })
      })
  return (
    <main>
       <section className={Innerstyle.breadcrumb}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Services</h1>
                            </div>
                        </div>
                    </div>
        </section>
        <section className="py-4">
                    <div className="container">
                    <div className='row'>
                      {
                        data.map((data)=>{
                          return(
                            <div className='col-md-3'key={data._id}>
                              <NavLink to={`/servicedetails/${data._id}`} className='text-decoration-none'>
                              <div className={`mb-4 p-3 ${Adminstyle.bx_shadow}`}>
                                {data.catname}
                              </div>

                              </NavLink>
                              
                            </div>
                          )
                        })
                      }

                    </div>
                    </div>
        </section>
     
    </main>
  )
}

export default Services