import React from 'react'
import styles from'./index.module.scss'
const Header=()=>{
    return(
        <div className={styles['gpt3_header']}>
            <div className={styles['gpt3_header_content']}>
             <h1 className={styles['gpt3_header_content_heading']}>Let's Build Something amazing with GPT-3 OpenAI </h1>
             <p  className={styles['gpt3_header_content_text']}>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
             <div  className={styles['gpt3_header_content_btn']}>
                <input type='email' name='email' placeholder='Your Email Address' />
                <button>Get Started</button>
              </div>
             <div  className={styles['gpt3_header_content_people']}>
                 <img  src={require('../../../../../assets/people.png')} alt='people'/>
                 <span>1,600 people requested access a visit in last 24 hours</span>
              </div>
            </div>
            <div  className={styles['gpt3_header_img']}>
                <img src={require('../../../../../assets/ai.png')}  alt='ai'/>
            </div>
        </div>
    )

}
export default Header