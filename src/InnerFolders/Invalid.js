import React from 'react'
import page from '../Assets/404-Page.gif'

const Invalid = () => {
  return (
    <div className='container text-center py-2'>
      <h4>Invalid connection</h4>
      <img src={page} alt='404-page' className='img-fluid'/>
    </div>
  )
}

export default Invalid