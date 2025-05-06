
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Routing from './Routing';
import 'animate.css'
import { createContext, useState } from 'react';


export const Store=createContext();

function App() {
  const [token, setToken]=useState("")
  return (
    
    <div className="App">
     <Store.Provider value={[token, setToken]}>
    <Header/>
    <Routing/>
    <Footer/>
    </Store.Provider>
  
    </div>
  );
}

export default App;
