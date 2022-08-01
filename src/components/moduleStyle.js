import React from 'react'
import styles from './moduleStyle.module.css'
function moduleStyle() {
  return (
    <div className='heading slug'>
       <h1 className={styles.heading}>this is a module style</h1>
       <h3 className={`${styles.heading} ${styles.slug}`}>This is another</h3>
    </div>
  )
}

export default moduleStyle
