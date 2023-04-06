import { Popover, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import styles from './MyPopover.module.css'

interface PopoverProps {
  button: JSX.Element
  children: ReactNode
}

const MyPopover = ({ button, children }: PopoverProps) => {
  return (
    <Popover>
      <Popover.Button className={styles.buttonOutsidePanel}>
        {button}
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Popover.Panel className={styles.panel}>
          <Popover.Button className={styles.buttonInsidePanel} />
          <div className={styles.panelContent}>
            {children}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default MyPopover