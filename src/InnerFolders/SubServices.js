import React, { useEffect, useState } from 'react'
import Adminstyle from '../Admin/Admin.module.css'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';


const SubServices = () => {
   const {catname} = useParams()
    const [sub, setSub] = useState([]);
     useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/subcategory`)
        .then(res => {
        // console.log(res)
          setSub(res.data);
           
        })
        .catch((err)=>{
            console.log(err);
        })
      })
  return (
    <main>
       <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3>Sub-Services</h3>
                               
                            </div>
                        </div>
                    </div>
        </section>
        <section className="py-4">
                    <div className="container">
                    <div className='row'>
                                        {
                                            sub.map((data)=>{
                                              return(
                                                <div className='col-md-3'key={data._id}>
                                                  <NavLink to={`/servicemore/${data.catname}/${data.subcatname}`} className='text-decoration-none'>
                                                  <div className={`mb-4 p-3 ${Adminstyle.bx_shadow}`}>
                                                    {data.subcatname}
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

export default SubServices