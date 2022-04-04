import React from 'react'
import Blog from './blog'
import Brands from './brands'
import CTA from './cta'
import Feature from './feature'
import FeatureAI from './featureAI'
import Footer from './footer'
import Header from './header'
import Navbar from './nav'
import WHGPT from './whgpt/WhGPT'
const LandPage=()=>{
    return(
        <>
         <Header/>
         <Brands/>
         <WHGPT/>
         <Feature/>
         <FeatureAI/>
         <CTA/>
         <Blog/>
        </>
    )

}
export default LandPage