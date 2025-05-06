import React, { useState } from 'react'
import Adminstyle from './Admin.module.css'
import axios from 'axios';

const AddSubcategory = () => {
  const [catname, setCatname]= useState("");
  const [subcatname, setSubcatname]=useState("");
  const [subcatdes, setSubcatdes] = useState("");

  const Add =(e)=>{
    e.preventDefault();
    axios.post(`https://mernbackend-rn59.onrender.com/subcategory`,{catname,subcatname,subcatdes})
    .then((res)=>{
      console.log(res)
      alert("subcategory added successfully")
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
                                                <input type="text" name="subcatname" placeholder="Subcategory Name" value={subcatname} className="form-control mb-4"onChange={(e)=>setSubcatname(e.target.value)}/>
                                                <textarea type="text" name="subcatdes" placeholder="Sub-Category Description" value={subcatdes}className="form-control mb-4"onChange={(e)=>setSubcatdes(e.target.value)}></textarea>
                                                <input type="submit" value="Add Subcategory" className='ps-4 pe-4'/>
                                              </form>                                               
                               </div>
                           </div>
                       </div>
                   </section>
  )
}

export default AddSubcategory