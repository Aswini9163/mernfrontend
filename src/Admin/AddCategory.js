import React, { useState } from 'react'
import Adminstyle from './Admin.module.css'
import axios from 'axios';


const AddCategory = () => {
  const [catname, setCatname]= useState("");
  const [catimg, setCatimg]=useState("");
  const [catdes, setCatdes] = useState("");

  const formdata = new FormData();

  const Add =(e)=>{
    formdata.append("catname",catname)
    formdata.append("image",catimg)
    formdata.append("catdes",catdes)

    e.preventDefault();
    axios.post(`https://mernbackend-rn59.onrender.com/category`,formdata)
    .then((res)=>{
      //console.log(res)
      alert("category added sucessfully")
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
   <section className="py-5">
                       <div className="container">
                           <div className="row">
                               <div className="col-md-8 m-auto">
                                   <form className={`${Adminstyle.bx_shadow} p-4`} onSubmit={Add}>
                                                <input type="text" name="catname" placeholder="Category Name" value={catname} className="form-control mb-4"onChange={(e)=>setCatname(e.target.value)}/>
                                               
                                                <input type="file" name="catimg"className={`form-control mb-4`}onChange={(e)=>setCatimg(e.target.files[0])}/>
                                               
                                                <textarea type="text" name="catdes" placeholder="Category Description" value={catdes}className="form-control mb-4"onChange={(e)=>setCatdes(e.target.value)}></textarea>
                                                <input type="submit" value="Add Category" className='ps-4 pe-4'/>
                                              </form>                                               
                               </div>
                           </div>
                       </div>
                   </section>
  )
}

export default AddCategory