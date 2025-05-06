import React, { useState } from 'react'
import Innerstyle from './Innerpages.module.css'
import Booking from './Booking'

const BookService = () => {

  return (
    <main>
           <section className={Innerstyle.breadcrumb}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Book Service</h1>
                                </div>
                            </div>
                        </div>
            </section>
           
                                   <section className='py-5'>
                                   <div className="container">
                                       <div className="row">
                                           <div className="col-md-8 m-auto">
                                   <Booking/>
                                   </div>
                                   </div>
                                   </div>
                                   </section>
                                   
                               
         
        </main>
  )
}

export default BookService