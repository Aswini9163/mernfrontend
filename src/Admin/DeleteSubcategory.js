import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTables from 'datatables.net-dt/js/dataTables.dataTables.min.js'

const DeleteSubcategory = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://mernbackend-rn59.onrender.com/subcategory`)
    .then((res)=>{
      console.log(res)
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

     setTimeout(()=>{
          new DataTables("#table");
     
         },1000)
    
  })
  const deleteData = (eid)=>{
    axios.delete(`https://mernbackend-rn59.onrender.com/subcategory/${eid}`)
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
           <div className='col-md-12'>
            <table className='table table-bordered table-responsive' id='table'>
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Subcategory Name</th>
                  <th>Subcategory Description</th>
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
                     
                        <td>{data.subcatdes}</td>
                        <td>
                          <NavLink to={`editsubcategory/${data._id}`}>

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

export default DeleteSubcategory