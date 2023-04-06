import React from "react"
import styles from "./Loader.module.css"
import clsx from "clsx"

type Props = {
  gridItem?: boolean
  pageSuspense?: boolean
}

const Loader = ({ gridItem, pageSuspense }: Props) => {
  return (
    <div className={clsx(styles.container, !gridItem && 'h-[var(--error-h)]', pageSuspense && 'h-screen')}>
      <div className={`${styles.dot} animate-ping`}></div>
      <div className={`${styles.dot} animate-ping animation-delay-300`}></div>
      <div className={`${styles.dot} animate-ping animation-delay-600`}></div>
    </div>
  )
}

export default Loader