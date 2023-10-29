import { useState, ChangeEvent } from 'react'

import { Input, Typography } from 'antd'
import Characters from '@/containers/Characters'

import styles from './styles.module.scss'

const { Title } = Typography

export default function RouteCharacters() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleInputSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div className={styles.PageCharacters}>
      <Title level={1}>Characters</Title>
      <Input
        className={styles.PageCharacters__Search}
        placeholder="Search someone"
        value={searchQuery}
        onInput={handleInputSearch}
      />

      <div className="mt-30">
        <Characters searchQuery={searchQuery} />
      </div>
    </div>
  )
}
