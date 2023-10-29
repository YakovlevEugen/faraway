import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import styles from './styles.module.scss'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Template({ className, ...otherProps }: Props) {
  const classRoot = cn(styles.Template, className)

  return (
    <div {...otherProps} className={classRoot}>
      Template
    </div>
  )
}
