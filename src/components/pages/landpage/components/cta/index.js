import React from 'react'
import styles from './index.module.scss'
const CTA=()=>{
    return(
        <div className={styles['gpt3_cta']}>
          <div className={styles['gpt3_cta-content']}>
              <p className={styles['gpt3_cta-content-subtitle']}>Request Early Access to Get Started</p>
              <p  className={styles['gpt3_cta-content-title']}>Register today & start exploring the endless possiblities.</p>
          </div>
          <button  className={styles['gpt3_cta-btn']}>Get Started</button>
        </div>
    )

}
export default CTA