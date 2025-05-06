import React from 'react'
import Footermodule from './Footer.module.css'
import Innerstyles from '../InnerFolders/Innerpages.module.css'

const Footer = () => {
  return (
   <footer>
    <section className={`${Innerstyles.panel} py-4`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <h5>About us</h5>
            <p>Global service providers</p>
            <p></p>

          </div>
          <div className='col-md-3'>
          <h5>Services</h5>
          <p>Cleaning service</p>
          <p>repair and maintainance</p>
          <p>Home Improvement</p>
          <p>Outdoor service</p>
          <p>Moving and storage</p>
          <p>Pest control</p>
          <p>Interior service</p>

          </div>
          <div className='col-md-3'>
            <h5>Address</h5>
            <p>12-187, near high complex</p>
            <p>Balanager</p>
            <p>Hyderabad-500037</p>

          </div>
          <div className='col-md-3'>
            <h5>Contact us</h5>
            <p><i className="bi bi-telephone"></i> 9845726131</p>
            <p><i className="bi bi-envelope"></i> globalservice@gmail.com</p>

          </div>
        </div>

      </div>
    </section>
   <section className={Footermodule.footer}>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 col-sm-6'>
          <p>&copy; 2025 Home Service</p>
        </div>
        <div className='col-md-6 col-sm-6'>
          <p className='text-end'>Designed by Aswini</p>
        </div>
      </div>
    </div>
   </section>
   </footer>
    
  )
}

export default Footer