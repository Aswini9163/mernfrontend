import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Adminstyle from './Admin.module.css'
import axios from 'axios';

const EditSubcategory = () => {
    const {eid} = useParams();
     const [catname, setCatname]= useState("");
       const [subcatname, setSubcatname]=useState("");
       const [subcatdes, setSubcatdes] = useState("");
      const navigate = useNavigate();
      useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/subcategory/${eid}`)
        .then((res)=>{
          //console.log(res)
          setCatname(res.data.catname)
          setSubcatname(res.data.subcatname)
          setSubcatdes(res.data.subcatdes)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])

      const editSubcategory = (e)=>{
        e.preventDefault();
        axios.put(`https://mernbackend-rn59.onrender.com/subcategory/${eid}`,{catname,subcatname,subcatdes})
        .then((res)=>{
            alert('Offer edited successfully')
            navigate('/admindashboard/deletesubcategory')
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
                                     <form className={`${Adminstyle.bx_shadow} p-4`}>
                                                  <input type="text" name="catname" placeholder="Category Name" value={catname} className="form-control mb-4"onChange={(e)=>setCatname(e.target.value)}/>
                                                  <input type="text" name="subcatname" placeholder="Subcategory Name" value={subcatname} className="form-control mb-4"onChange={(e)=>setSubcatname(e.target.value)}/>
                                                  <textarea type="text" name="subcatdes" placeholder="Sub-Category Description" value={subcatdes}className="form-control mb-4"onChange={(e)=>setSubcatdes(e.target.value)}></textarea>
                                                  <input type="submit" value="Edit Subcategory" onClick={editSubcategory}className='ps-4 pe-4'/>
                                                </form>                                               
                                 </div>
                             </div>
                         </div>
                     </section>
  )
}

export default EditSubcategory