import React, { PropsWithChildren } from 'react'
import styles from './GridListItem.module.css'

const GridListItem = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default GridListItem