import React, { useEffect, useState } from 'react'
import banner from '../Assets/banner2.avif'
import Adminstyle from '../Admin/Admin.module.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Booking from './Booking';
import booking  from '../Assets/booking.jpg'
import Innerstyle from '../InnerFolders/Innerpages.module.css'
import 'animate.css'

const Home = () => {
  const [data, setData] = useState([]);
  const [off, setOff]=useState([])
  useEffect(()=>{
    axios.get(`https://mernbackend-rn59.onrender.com/category`)
    .then(res => {
      // console.log(res)
      setData(res.data);
       
    })
    .catch((err)=>{
        console.log(err);
    })
    axios.get(`https://mernbackend-rn59.onrender.com/offer`)
    .then(res => {
      // console.log(res)
      setOff(res.data);
       
    })
    .catch((err)=>{
        console.log(err);
    })
  })
  return (
    <main>
                <section>
                    <div className="container-fluid">
                      <div className={Adminstyle.div1}>
                        <div className="row">
                            <div className="col-md-12 p-0">
                               <img src={banner} alt="Banner" className="w-100" />
                            </div>
                        </div>
                        </div>
                        <div className={Adminstyle.div2}>
                           <h2>Welcome to Global Home services</h2>
                        </div>
                    </div>
                </section>
               
                <section className=''>
                <div className="text-bg-success py-2 ">
            <p className="mt-2">
                <marquee onmouseover="this.stop();" onmouseout="this.start();">
                <div className='row'>
                      {
                        off.map((data)=>{
                          return(
                            <div className='col'key={data._id}>
                              <div>
                               {data.offername}
                              </div>
                            </div>
                          )
                        })
                      }
                      </div>
                </marquee>
            </p>
        </div>
                </section>
                <section className='py-4'>
                  <div className='container'>
                    <h3 className='text-center mb-3'>Our services</h3>
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
                <section className='text-center container-fluid py-3'>
                  <div className='bg-success py-4'>
                  <h5 className={`${Innerstyle.title} mx-auto animate__flash`}>10% offer on first booking
                  </h5>
                  </div>
                </section>
                <section className='py-2'>
      <div className='container'>
        <div className='row text-center'>
          <h4 className='text-center mb-5'>key Highlights</h4>
          <div className='col-md-3 col-sm-6'>
            <p className={Innerstyle.key}>Eco-Friendly Options</p>

          </div>
          <div className='col-md-3 col-sm-6'>
         
          <p className={Innerstyle.key}>Trusted Professionals</p>

          </div>
          <div className='col-md-3 col-sm-6'>
          <p className={Innerstyle.key}>Convenient Scheduling</p>

          </div>
          <div className='col-md-3 col-sm-6'>
          <p className={Innerstyle.key}>Quick Response Time</p>

          </div>
        </div>

      </div>
    </section>
                <section className='p-4 '>
                  <div className='row'>
                    <h3 className='text-center'>Book Service</h3>

                  <div className='col-md-6 d-flex justify-content-center align-content-center mt-5'>
                    <img src={booking} alt="booking"  className={`${Adminstyle.fluid}`}/>

                  </div>
                  <div className='col-md-6 col-lg-6 mt-5'>

                  <Booking/>
                  </div>
                  </div>
                </section>
                <section className='py-4'>
                  <div className='container'>

                  </div>

                </section>
               
                </main>
  )
}

export default Home