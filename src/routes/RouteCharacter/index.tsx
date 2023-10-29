import { useMemo, ReactNode } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import { EditOutlined } from '@ant-design/icons'
import { Descriptions, Skeleton, Typography } from 'antd'
import {
  CHARACTER_APPEARANCE_INFO,
  CHARACTER_APPEARANCE_INFO_KEYS,
  CHARACTER_LINKS,
  CHARACTER_LINKS_KEYS,
} from '@/constants/components'
import { FormSchema } from '@/components/CharacterForm'

import { LOCAL_STORAGE_CHARACTER_KEY } from '@/constants/storage'
import { usePerson } from '@/store/people'
import { Person } from '@/types/store'

import styles from './styles.module.scss'

const { Title } = Typography

export default function RouteCharacterEdit() {
  const { id } = useParams()

  const { result: resultCharacter, isLoading } = usePerson(id)
  const [localCharacter] = useLocalStorage(`${LOCAL_STORAGE_CHARACTER_KEY}${id}`)

  const character = useMemo<Person>(() => {
    const parsedLocalCharacter: FormSchema | null =
      localCharacter && typeof localCharacter === 'string' ? JSON.parse(localCharacter) : null

    return typeof parsedLocalCharacter === 'object'
      ? {
          ...resultCharacter,
          ...parsedLocalCharacter,
        }
      : resultCharacter
  }, [localCharacter, resultCharacter])

  const characterInfo = useMemo(() => {
    if (!character?.name) return []

    return CHARACTER_APPEARANCE_INFO_KEYS.map((key) => ({
      key,
      label: CHARACTER_APPEARANCE_INFO[key],
      children: character[key],
    }))
  }, [character])

  const characterLinks = useMemo(() => {
    if (!character?.name) return []

    return CHARACTER_LINKS_KEYS.filter((key) => character[key].length).map((key) => ({
      key,
      label: CHARACTER_LINKS[key],
      children: getCharacterLinksBlock(character[key], CHARACTER_LINKS[key]),
    }))
  }, [character])

  function getCharacterLinksBlock(links: string[], label: string): string | ReactNode {
    if (!links.length) return ''

    return (
      <ul>
        {links.map((link, i) => (
          <li key={link}>
            <a href={link}>{`${label} ${i + 1}`}</a>
          </li>
        ))}
      </ul>
    )
  }

  if (isLoading || !character?.name) return <Skeleton active />

  return (
    <div className={styles.PageCharacter}>
      <Title level={1}>
        {character.name}
        <Link to={`/character/${id}/edit`}>
          <EditOutlined className="action-icon" />
        </Link>
      </Title>
      <a href={character.homeworld} className="d-inline-block mb-20" target="_blank" rel="nofollow noopener">
        <Title level={5}>Home World →</Title>
      </a>

      <div className={styles.PageCharacter__Info}>
        <Descriptions bordered column={1} items={characterInfo} className={styles.PageCharacter__InfoBlock} />
        <Descriptions bordered column={1} items={characterLinks} className={styles.PageCharacter__InfoBlock} />
      </div>
    </div>
  )
}
