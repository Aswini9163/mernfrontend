import React, { useContext, useEffect, useState } from 'react'
import Adminstyle from './Admin.module.css'
import AdminSidebar from './AdminSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Store } from '../App'
import axios from 'axios'

const AdminDashboard = () => {

    const [token, setToken]= useContext(Store)
    const [data, setData]= useState("")
    const navigate= useNavigate();
    if(!token){
        navigate("/admin")
    }
    useEffect(()=>{
        axios.get(`https://mernbackend-rn59.onrender.com/admindashboard`,{
        headers:{
        "x-token":token
        }
        })
        .then((res)=>{
            console.log(res)
            setData(res.data)
        
           
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (
    <main>
                   <section className={Adminstyle.breadcrumb}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h1>Admin Dashboard</h1>
                                        </div>
                                    </div>
                                </div>
                    </section>
                    <section className="py-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <AdminSidebar/>
                                        </div>
                                        <div className="col-md-9">
                                            <Outlet/>
                                        </div>
                                        </div>
                                        </div>
                                        </section>
                                        </main>
  )
}

export default AdminDashboard