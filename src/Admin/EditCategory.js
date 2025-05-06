import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Adminstyle from './Admin.module.css'

const EditCategory = () => {
    const {eid} = useParams();
    const [catname, setCatname]= useState("");
    const [catimg, setCatimg]=useState("");
    const [catdes, setCatdes] = useState("");

    const formdata = new FormData();
   useEffect(()=>{
  
        axios.get(`https://mernbackend-rn59.onrender.com/category/${eid}`)
        .then((res)=>{
         console.log(res.data)
         setCatname(res.data.catname)
         setCatdes(res.data.catdes)
        
        })
        .catch((err)=>{
          console.log(err)
        })
    },[])
 const editData = (e)=>{
  formdata.append("catname",catname)
  formdata.append("image",catimg)
  formdata.append("catdes",catdes)
    e.preventDefault(
      axios.put(`https://mernbackend-rn59.onrender.com/category/${eid}`,formdata)
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
    )
  }
   
  
    return (
        
     <section className="py-5">
                         <div className="container">
                             <div className="row">
                                 <div className="col-md-8 m-auto">
                               
                                     <form className={`${Adminstyle.bx_shadow} p-4`}>
                                                  <input type="text" name="catname" placeholder="Category Name" value={catname} className="form-control mb-4"onChange={(e)=>setCatname(e.target.value)}/>
                                                 
                                                  <input type="file" name="catimg"  className={`form-control mb-4`}onChange={(e)=>setCatimg(e.target.files[0])}/>
                                                 
                                                  <textarea type="text" name="catdes" placeholder="Category Description" value={catdes}className="form-control mb-4"onChange={(e)=>setCatdes(e.target.value)}></textarea>
                                                  <input type="submit" value="Edit Category" onClick={editData}className='ps-4 pe-4'/>
                                                </form>                                               
                                 </div>
                             </div>
                         </div>
                     </section>
    )
  }

export default EditCategory