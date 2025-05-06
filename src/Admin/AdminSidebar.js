import React from 'react'
import { NavLink } from 'react-router-dom'
import Adminstyle from './Admin.module.css'

const AdminSidebar = () => {
  return (
    <div className={Adminstyle.sidebar}>
        <ul>
            <li>
                <NavLink to='' className={Adminstyle.underline}>
                 Add Category
                </NavLink>
            </li>
            <li>
                <NavLink to='deletecategory'  className={Adminstyle.underline}>
                 Edit & Delete Category
                </NavLink>
            </li>
            <li>
                <NavLink to='addsubcategory'  className={Adminstyle.underline}>
                 Add Sub-Category
                </NavLink>
            </li>
            <li>
                <NavLink to='deletesubcategory'  className={Adminstyle.underline}>
                Edit & Delete Sub-Category
                </NavLink>
            </li>
            <li>
                <NavLink to='addoffer'  className={Adminstyle.underline}>
                 Add Offers
                </NavLink>
            </li>
            <li>
                <NavLink to='deleteoffer'  className={Adminstyle.underline}>
                Edit & Delete Offers
                </NavLink>
            </li>
            <li>
                <NavLink to='addservice'  className={Adminstyle.underline}>
                Add Service Provider
                </NavLink>
            </li>
            <li>
                <NavLink to='deleteservice'  className={Adminstyle.underline}>
                Edit & Delete Service Provider
                </NavLink>
            </li>
            <li>
                <NavLink to='servicedata'  className={Adminstyle.underline}>
                Service Data
                </NavLink>
            </li>
            
        </ul>
    </div>
  )
}

export default AdminSidebar