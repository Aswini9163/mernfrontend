import React, { useEffect, useState } from 'react'
import Innerstyle from './Innerpages.module.css'
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';



const ServiceMore = () => {
  const {catname,subcatname} = useParams();
    const [data, setData] = useState("");
     const [ser, setSer] = useState([]);
      useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/subcategory/${catname}/${subcatname}`)
        .then(res => {
         // console.log(res)
         setData(res.data);
           
        })
        .catch((err)=>{
            console.log(err);
        })
      
      })
      useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/service`)
        .then(res => {
          //console.log(res)
         setSer(res.data);
           
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
                                <h1>{subcatname}</h1>
                            </div>
                        </div>
                    </div>
        </section>
        <section >
                    <div className="container">
                        <div className="row">
                           <div className='col-md-12'>
                            <p>{data.subcatdes}</p>
                           {/*} <ul>
                              <li>
                            <h3>{data.subcatname}</h3>

                              </li>
                            </ul>*/}

                           </div>
                        </div>
                    </div>
        </section>
       <section className="py-4">
                           <div className="container">
                           <div className='row'>
                             {
                               ser.map((data)=>{
                                 return(
                                  <div className='col-md-8 d-flex  justify-content-between'>
                                   <div className='mb-4'key={data._id} >
                                 
                                  <h6>{data.serviceproname}</h6>
                                  <p>{data.businessname}</p>
                                  <p>{data.exp}</p>
                                  <p>{data.phone}</p>
                                  <p>{data.email}</p>
                                  <p>{data.businessadd}</p>
                                 </div>
                                  
                                   <div>
                                    <NavLink to={`/bookservice/${catname}/${subcatname}/${data.serviceproname}`}>
                                                                <button className='btn btn-success mt-5'>Book Service</button>
                                                                </NavLink>
                                                                </div>
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

export default ServiceMore