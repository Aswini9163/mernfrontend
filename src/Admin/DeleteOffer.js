import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTables from 'datatables.net-dt/js/dataTables.dataTables.min.js'


const DeleteOffer = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://mernbackend-rn59.onrender.com/offer`)
    .then((res)=>{
      console.log(res)
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
     setTimeout(()=>{
          new DataTables("#mynew");
     
         },1000)
    
  })
  const deleteData = (eid)=>{
    axios.delete(`https://mernbackend-rn59.onrender.com/offer/${eid}`)
    .then((res)=>{
      //alert(eid)
      alert('Data Deleted Successfully')
    })
    .catch((err)=>{
      console.log(err)
    })
      setTimeout(()=>{
          new DataTables("#mynew");
     
         },1000)
   }
  return (
    <section>
      <div className='container'>
         <div className='row'>
           <div className='col-md-12'>
            <table className='table table-bordered table-responsive' id='mynew'>
              <thead>
                <tr>
                  <th>Offer Name</th>
                  <th>Offer Description</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((data)=>{
                    return(
                      <tr key={data._id}>
                        <td>{data.offername}</td>
                        <td>{data.offerdes}</td>
                        <td>
                          <NavLink to={`editoffer/${data._id}`}>

                          <button className='btn btn-primary'><i class="bi bi-pencil"></i></button>
                          </NavLink>
                        </td>
                        <td>
                          <button className='btn btn-danger'onClick={()=>deleteData(data._id)}><i class="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      
                    )
                  })
                }
              </tbody>

            </table>
           </div>

         </div>
      </div>
    </section>
  )
}

export default DeleteOffer