import { DetailedHTMLProps, HTMLAttributes } from 'react'

import { Skeleton } from 'antd'
import CharactersList from '@/components/CharactersList'

import { usePeople } from '@/store/people'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /* Search Query */
  searchQuery: string
}

export default function Characters({ searchQuery, className, ...otherProps }: Props) {
  const { result, isLoading } = usePeople({ query: searchQuery }, { debouncedOn: 500 })
  const characters = result?.characters ?? []

  if (isLoading) return <Skeleton active />
  if (!characters?.length) return 'Characters Not Found'

  return (
    <div {...otherProps} className={className}>
      <CharactersList characters={characters} />
    </div>
  )
}
