import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { Card } from 'antd'
import { Link } from 'react-router-dom'

import { CHARACTER_APPEARANCE_INFO, CHARACTER_APPEARANCE_INFO_KEYS } from '@/constants/components'
import { Person } from '@/types/store'

import styles from './styles.module.scss'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /* Id */
  characterId?: number
  /* Character Info */
  character: Person
}

export default function CharactersCard({ character, characterId, className, ...otherProps }: Props) {
  const RootComponent = characterId ? Link : 'div'

  return (
    <RootComponent
      {...otherProps}
      to={characterId ? `character/${characterId}` : ''}
      className={cn(styles.CharactersCardWrapper, className)}
    >
      <Card title={character.name}>
        <ul>
          {CHARACTER_APPEARANCE_INFO_KEYS.map((characteristicKey) => (
            <li key={characteristicKey}>
              {CHARACTER_APPEARANCE_INFO[characteristicKey]}: {character[characteristicKey]}
            </li>
          ))}
        </ul>
      </Card>
    </RootComponent>
  )
}
