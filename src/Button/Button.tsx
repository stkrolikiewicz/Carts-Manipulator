import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

type Props = {
  children: ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  disabled?: boolean
  bgColor?: string
}

const Button = ({ children, onClick, disabled, bgColor }: Props) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, bgColor ? bgColor : 'bg-blue-600')} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button