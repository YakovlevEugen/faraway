import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { People } from '@/types/store'

import styles from './styles.module.scss'
import CharactersCard from '@/components/CharactersCard'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /* Characters */
  characters: People
}

export default function CharactersList({ characters, className, ...otherProps }: Props) {
  return (
    <div {...otherProps} className={cn(styles.CharactersList, className)}>
      {characters.map((character, i) => (
        <CharactersCard
          key={character.name}
          characterId={i + 1}
          character={character}
          className={styles.CharactersList__Item}
        />
      ))}
    </div>
  )
}
