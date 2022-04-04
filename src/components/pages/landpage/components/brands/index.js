import React from 'react'
import styles from './index.module.scss'
const Brands=()=>{
    return(
        <div className={styles['gpt3_brands']}>
             <figure className={styles['gpt3_brands-logo']}><img src={require('../../../../../assets/google.png')} alt='google'/></figure>
             <figure className={styles['gpt3_brands-logo']}><img src={require('../../../../../assets/slack.png')} alt='slack'/></figure>
             <figure className={styles['gpt3_brands-logo']}><img src={require('../../../../../assets/atlassian.png')} alt='atlasien'/></figure>
             <figure className={styles['gpt3_brands-logo']}><img src={require('../../../../../assets/dropbox.png')} alt='dropbox'/></figure>
             <figure className={styles['gpt3_brands-logo']}><img src={require('../../../../../assets/shopify.png')} alt='shopify'/></figure>
        </div>
    )

}
export default Brands