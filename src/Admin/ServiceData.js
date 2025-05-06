import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTables from 'datatables.net-dt/js/dataTables.dataTables.min.js'


const ServiceData = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://mernbackend-rn59.onrender.com/bookservice`)
    .then((res)=>{
      //console.log(res)
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

     setTimeout(()=>{
          new DataTables("#tables");
     
         },1000)
    
  })
  const deleteData = (eid)=>{
    axios.delete(`https://mernbackend-rn59.onrender.com/bookservice/${eid}`)
    .then((res)=>{
      //alert(eid)
      alert('Data Deleted Successfully')
    })
    .catch((err)=>{
      console.log(err)
    })
     
   }
  return (
    <section>
      <div className='container'>
         <div className='row'>
           <div className='col-md-12 overflow-scroll'>
            <table className='table table-bordered table-responsive' id='tables'>
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>subcategory Name</th>
                  <th>Service Provider Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((data)=>{
                    return(
                      <tr key={data._id}>
                        <td>{data.catname}</td>
                     
                       <td>{data.subcatname}</td>
                     
                        <td>{data.serviceproname}</td>
                        <td>{data.bdate}</td>
                        <td>{data.btime}</td>
                        <td>{data.phone}</td>
                     
                        <td>{data.email}</td>
                        <td>{data.subject}</td>
                        <td>{data.message}</td>
                        <td>
                    
                          <NavLink to={`editbookservice/${data._id}`}>

                              <button className='btn btn-primary'><i className="bi bi-pencil"></i></button>
                          </NavLink>
                            
                        </td>
                        <td>
                          <button className='btn btn-danger'onClick={()=>deleteData(data._id)}><i className="bi bi-trash3"></i></button>
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

export default ServiceData