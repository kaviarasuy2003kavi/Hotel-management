import React from 'react'
import "./home.css"
import Navbar from '../../componentes/Navbar/Navbar'
import Header from '../../componentes/header/Header'
import Featured from '../../componentes/featured/featured'
import PropertyList from '../../componentes/propertyList/propertyList'
import Featuredproperty from '../../componentes/featuredproperty/Featuredproperty'
import MailList from '../../componentes/MailList/MailList'
import Footer from '../../componentes/Footer/Footer'

const Home = () => {
  return (
    <div >
       <Navbar/> 
       <Header/>
       <div className="homecontainer">
        <Featured/>
        <h1 className="hometitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="hometitle">Homes guests love</h1>
        <Featuredproperty/>
        <MailList/>
         <Footer/>
       </div>
    </div>
  )
}

export default Home