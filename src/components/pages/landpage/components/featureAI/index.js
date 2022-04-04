import React from 'react'
import styles from './index.module.scss'
const FeatureAI=()=>{
    return(
        <div className={styles['gpt3_feature-ai']}>
            <div className={styles['gpt3_feature-ai-img']}>
               <img src={require('../../../../../assets/possibility.png')} alt='ai'/>
            </div>
            <div className={styles['gpt3_feature-ai-content']}>
              <p className={styles['gpt3_feature-ai-content-sub1']}>Request Early Access to Get Started</p>
              <p className={styles['gpt3_feature-ai-content-head']}>The possibilities are beyond your imagination</p>
              <p className={styles['gpt3_feature-ai-content-text']}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
              <p className={styles['gpt3_feature-ai-content-sub2']}>Request Early Access to Get Started</p>
            </div>
        </div>
    )

}
export default FeatureAI