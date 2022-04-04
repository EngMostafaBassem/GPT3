import React from 'react'
import styles from './index.module.scss'
const Footer=()=>{
    return(
        <div className={styles['gpt3_footer']}>
          <p  className={styles['gpt3_footer-title']}>Do you want to step in to the future before others</p>
          <button  className={styles['gpt3_footer-btn']}>Request Early Access</button>
          <div  className={styles['gpt3_footer-content']}>
              <div className={styles['gpt3_footer-content-logo']}>
                  <p>GPT-3</p>
                  <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
              </div>
              <div className={styles['gpt3_footer-content-links']}>
                  <p className={styles['gpt3_footer-content-links-head']}>Links</p>
                  <ul  className={styles['gpt3_footer-content-links-list']}>
                    <li><a href='#'>Overons</a></li>
                    <li><a href='#'>Social Media</a></li>
                    <li><a href='#'>Counters</a></li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
              </div>

              <div className={styles['gpt3_footer-content-links']}>
                  <p className={styles['gpt3_footer-content-links-head']}>Company</p>
                  <ul  className={styles['gpt3_footer-content-links-list']}>
                    <li><a href='#'>Terms & Conditions</a></li>
                    <li><a href='#'>Privacy Polic</a></li>
                    <li><a href='#'>Contact</a></li>
                  </ul>
              </div>


              <div className={styles['gpt3_footer-content-links']}>
                  <p className={styles['gpt3_footer-content-links-head']}>Get in touch</p>
                  <ul  className={styles['gpt3_footer-content-links-list']}>
                    <li><a href='#'>Crechterwoord K12 182 DK Alknjkcb</a></li>
                    <li><a href='#'>085-132567</a></li>
                    <li><a href='#'>info@payme.net</a></li>
                  </ul>
              </div>
              
          </div>
          <p  className={styles['gpt3_footer-cpyright']}>© 2021 GPT-3. All rights reserved.</p>
        </div>
    )

}
export default Footer