import React, { useEffect, useState } from 'react'
import Innerstyle from './Innerpages.module.css'
import axios from 'axios';

const Offers = () => {
      const [data, setData] = useState([]);
          useEffect(()=>{
            axios.get(`https://mernbackend-rn59.onrender.com/offer`)
            .then(res => {
              //console.log(res)
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
                                    <h1>Offers</h1>
                                </div>
                            </div>
                        </div>
            </section>
            <section className="py-4">
                        <div className="container">
                            <div className="row">
                                {
                                    data.map((data)=>{
                                        return(
                                        <div className="col-md-12" key={data._id}>
                                            <ul>
                                                <li>
                                                <h4 className={`${Innerstyle.titles} animate__fadeIn`}>{data.offername}</h4>
                                                <p>{data.offerdes}</p>
                                                </li>
                                            </ul>
                                           
                                   
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

export default Offers