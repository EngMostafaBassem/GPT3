import React from 'react'
import styles from './index.module.scss'
const Blog=()=>{
    return(
        <div className={styles['gpt3_blog']}>
           <p className={styles['gpt3_blog-title']}>A lot is happening,We are blogging about it.</p>
           <div className={styles['gpt3_blog-container']}>
              <div className={`${styles['block']} ${styles['block--1']}`}>
                  <div className={styles['block-img']}>
                     <img src={require('../../../../../assets/blog01.png')}/>
                  </div>
                  <div className={styles['block-content']}>
                     <p  className={styles['block-content-date']}>Sep 26,2021</p>
                     <p  className={styles['block-content-text']}>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                     <a href='#'  className={styles['block-content-link']}>Read Full Articles</a>
                  </div>
              </div>
              <div className={`${styles['block']} ${styles['block--2']}`}>
                  <div className={styles['block-img']}>
                     <img src={require('../../../../../assets/blog02.png')}/>
                  </div>
                  <div className={styles['block-content']}>
                     <p  className={styles['block-content-date']}>Sep 26,2021</p>
                     <p  className={styles['block-content-text']}>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                     <a href='#'  className={styles['block-content-link']}>Read Full Articles</a>
                  </div>
              </div>
              <div className={`${styles['block']} ${styles['block--3']}`}>
                  <div className={styles['block-img']}>
                     <img src={require('../../../../../assets/blog03.png')}/>
                  </div>
                  <div className={styles['block-content']}>
                     <p  className={styles['block-content-date']}>Sep 26,2021</p>
                     <p  className={styles['block-content-text']}>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                     <a href='#'  className={styles['block-content-link']}>Read Full Articles</a>
                  </div>
              </div>
              <div className={`${styles['block']} ${styles['block--4']}`}>
                  <div className={styles['block-img']}>
                     <img src={require('../../../../../assets/blog04.png')}/>
                  </div>
                  <div className={styles['block-content']}>
                     <p  className={styles['block-content-date']}>Sep 26,2021</p>
                     <p  className={styles['block-content-text']}>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                     <a href='#'  className={styles['block-content-link']}>Read Full Articles</a>
                  </div>
              </div>
              <div className={`${styles['block']} ${styles['block--5']}`}>
                  <div className={styles['block-img']}>
                     <img src={require('../../../../../assets/blog05.png')}/>
                  </div>
                  <div className={styles['block-content']}>
                     <p  className={styles['block-content-date']}>Sep 26,2021</p>
                     <p  className={styles['block-content-text']}>GPT-3 and Open  AI is the future. Let us exlore how it is?</p>
                     <a href='#'  className={styles['block-content-link']}>Read Full Articles</a>
                  </div>
              </div>
           </div>

        </div>
    )

}
export default Blog