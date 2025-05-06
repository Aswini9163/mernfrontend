import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './InnerFolders/Home'
import Services from './InnerFolders/Services'
import BookService from './InnerFolders/BookService'
import Offers from './InnerFolders/Offers'
import ContactUs from './InnerFolders/ContactUs'
import Invalid from './InnerFolders/Invalid'
import Admin from './Admin/Admin'
import Register from './Admin/Register'
import ForgotPassword from './Admin/ForgotPassword'
import AdminDashboard from './Admin/AdminDashboard'
import AddCategory from './Admin/AddCategory'
import DeleteCategory from './Admin/DeleteCategory'
import AddSubcategory from './Admin/AddSubcategory'
import DeleteSubcategory from './Admin/DeleteSubcategory'
import AddOffer from './Admin/AddOffer'
import DeleteOffer from './Admin/DeleteOffer'
import AddServiceProvider from './Admin/AddServiceProvider'
import DeleteServiceProvider from './Admin/DeleteServiceProvider'
import ServiceData from './Admin/ServiceData'
import EditCategory from './Admin/EditCategory'
import EditOffer from './Admin/EditOffer'
import EditSubcategory from './Admin/EditSubcategory'
import EditServiceProvider from './Admin/EditServiceProvider'
import ServiceDetails from './InnerFolders/ServiceDetails'

import SubServices from './InnerFolders/SubServices'
import ServiceMore from './InnerFolders/ServiceMore'
import EditBookService from './Admin/EditBookService'



const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/bookservice' element={<BookService/>}/>
            <Route path='/bookservice/:cat/:subcat/:service' element={<BookService/>}/>
            
            <Route path='/offers' element={<Offers/>}/>
            <Route path='/contactus' element={<ContactUs/>}/>
            <Route path='/servicedetails/:id' element={<ServiceDetails/>}/>
            <Route path='/servicemore/:catname/:subcatname' element={<ServiceMore/>}/>
           
            <Route path='/subservices' element={<SubServices/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/admindashboard'element={<AdminDashboard/>}>
            <Route path='' element={<AddCategory/>}/>
            <Route path='deletecategory' element={<DeleteCategory/>}/>
            <Route path='addsubcategory' element={<AddSubcategory/>}/>
            <Route path='deletesubcategory' element={<DeleteSubcategory/>}/>
            <Route path='addoffer' element={<AddOffer/>}/>
            <Route path='deleteoffer' element={<DeleteOffer/>}/>
            <Route path='addservice' element={<AddServiceProvider/>}/>
            <Route path='deleteservice' element={<DeleteServiceProvider/>}/>
            <Route path='servicedata' element={<ServiceData/>}/>
            <Route path='deletecategory/editcategory/:eid' element={<EditCategory/>}/>
            <Route path='deleteoffer/editoffer/:eid' element={<EditOffer/>}/>
            <Route path='deletesubcategory/editsubcategory/:eid' element={<EditSubcategory/>}/>
            <Route path='deleteservice/editservice/:eid' element={<EditServiceProvider/>}/>
            <Route path='servicedata/editbookservice/:eid' element={<EditBookService/>}/>
            </Route>
            <Route path='/register' element={<Register/>}/>
            <Route path='/forgotpass' element={<ForgotPassword/>}/>
            <Route path='*' element={<Invalid/>}/>
        </Routes>
    </div>
  )
}

export default Routing