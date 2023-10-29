import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import { Skeleton, Typography } from 'antd'
import CharacterForm, { FormSchema } from '@/components/CharacterForm'

import { LOCAL_STORAGE_CHARACTER_KEY } from '@/constants/storage'
import { useCallPerson } from '@/store/people'
import { Person } from '@/types/store'

const { Title } = Typography

export default function RouteCharacter() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { call: callPerson, isLoading } = useCallPerson()
  const [localCharacter, setLocalCharacter] = useLocalStorage(`${LOCAL_STORAGE_CHARACTER_KEY}${id}`)

  const [character, setCharacter] = useState<Person | null>(null)

  useEffect(() => {
    if (localCharacter && typeof localCharacter === 'string') {
      setCharacter(JSON.parse(localCharacter))
    } else if (!character) {
      callPerson(id).then((result) => {
        setCharacter(result)
      })
    }
  }, [])

  if (isLoading || !character?.name) return <Skeleton active />

  function save(formData: FormSchema) {
    const formDataStringified = JSON.stringify(formData)
    setLocalCharacter(formDataStringified)
    id && navigate(`/character/${id}/`)
  }

  function cancel() {
    if (!id) return

    navigate(`/character/${id}/`)
  }

  return (
    <div>
      <Title level={1}>{character.name}</Title>

      <CharacterForm defaultValues={character} onCancel={cancel} onSubmitForm={save} />
    </div>
  )
}
