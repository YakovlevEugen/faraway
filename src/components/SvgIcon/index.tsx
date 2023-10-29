/**
 * All icons can be found in @/assets/svg
 * Example:
 <SvgIcon name="clock" />
 */

import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import styles from './styles.module.scss'

export interface Props extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  /** Icon name from svg icons folder */
  name: string
}

export default function SvgIcon({ name, className, ...otherProps }: Props) {
  return (
    <svg {...otherProps} className={cn(styles.SvgIcon, className)} aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  )
}
