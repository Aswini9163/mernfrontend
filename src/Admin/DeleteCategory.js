import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTables from 'datatables.net-dt/js/dataTables.dataTables.min.js'


const DeleteCategory = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://mernbackend-rn59.onrender.com/category`)
    .then((res)=>{
      //console.log(res)
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    setTimeout(()=>{
      new DataTables("#extable");
 
     },1000)

   
  }
)
   const deleteData = (eid)=>{
    axios.delete(`https://mernbackend-rn59.onrender.com/category/${eid}`)
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
            <table className='table table-bordered table-responsive' id="extable">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Category Image</th>
                  <th>Category Description</th>
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
                        <td>
                        <div>
                    <img src={`http://localhost:4000/uploads/${data.filename}`} alt={data.catname} className='img-fluid'/>
                        </div>
                        </td>
                        <td>{data.catdes}</td>
                        <td>
                          <NavLink to={`editcategory/${data._id}`}>

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

export default DeleteCategory