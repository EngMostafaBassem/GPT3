import React, { useState } from 'react'
import styles from './index.module.scss'
import { FaBars } from 'react-icons/fa';
const Navbar=()=>{
    const [toggle,setToggle]=useState(false)
    return(
        <nav className={styles['gpt3_nav']}>
            <div className={styles['gpt3_nav-links']}>
               <div className={styles['gpt3_nav-links_logo']}>
                  <span>GPT-3</span>
               </div>
               <ul className={styles['gpt3_nav-links_list']}>
                 <li><a href='#'>Home</a></li>
                 <li><a href='#'>What is GPT?</a></li>
                 <li><a href='#'>Open AI</a></li>
                 <li><a href='#'>Case Studies</a></li>
                 <li><a href='#'>Library</a></li>
               </ul>
            </div>
            <div className={styles['gpt3_nav-btns']}>
                <button  className={styles['btn--outlined']}>Sign in</button>
                <button  className={styles['btn--filled']}>Sign up</button>
            </div>
            <div className={styles['gpt3_nav-menu']}>
               <FaBars color='white' size={30} onClick={()=>setToggle(toggle=>!toggle)}/>
               {
                   toggle&&(
                    <div className={styles['gpt3_nav-menu_container']}>
                    <ul className={styles['gpt3_nav-menu_container_list']}>
                      <li><a href='#'>Home</a></li>
                      <li><a href='#'>What is GPT?</a></li>
                      <li><a href='#'>Open AI</a></li>
                      <li><a href='#'>Case Studies</a></li>
                      <li><a href='#'>Library</a></li>
                     </ul> 
                     <div className={styles['gpt3_nav-menu_container_btns']}>
                        <button>Sign in</button>
                        <button >Sign up</button>
                     </div>
                   </div>
                   )
               }
              
              
                 
              
            </div>
           
        </nav>
    )

}
export default Navbar