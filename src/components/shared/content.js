import React from 'react'
import '../../App.css'
import Footer from '../pages/landpage/components/footer'
import Navbar from '../pages/landpage/components/nav'
const Content=({children})=>{
    return(
       <>
        <div className='App'>
           <Navbar/> 
           {children}
        </div>
          <Footer/>
       </> 
    )

}
export default Content