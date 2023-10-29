import useSWR from 'swr'

import { formatApiUrl } from '@/helpers/url'
import { useApiCall } from '@/hooks/api-call'
import { DEFAULT_DEBOUNCE_PROPS, useDebounce, QueryDebounceProps } from '@/hooks/api-call/debounce'
import { useLoading } from '@/hooks/loading'
import { RequestPeople } from '@/types/requests'
import { People, Person } from '@/types/store'
import * as Zod from '@/zod'

interface PropsUsePeople {
  query?: string
}

const API_PATH = formatApiUrl('people')

export function usePeople({ query }: PropsUsePeople, { debouncedOn }: QueryDebounceProps = DEFAULT_DEBOUNCE_PROPS) {
  const debouncedQuery = useDebounce<PropsUsePeople['query']>(query, debouncedOn)
  const { data, error, isLoading } = useSWR<RequestPeople>(
    `${API_PATH}${debouncedQuery ? '?search=' + debouncedQuery : ''}`
  )
  const parsedPeople: People = Zod.People.parse(data?.results)
  const result = {
    ...data,
    characters: parsedPeople,
  }

  return { result, error, isLoading }
}

export function usePerson(id: number | null) {
  const { data, error, isLoading } = useSWR<Person>(id ? `${API_PATH}/${id}` : null)
  const result: Person = Zod.Person.parse(data)

  return { result, error, isLoading }
}

export function useCallPerson() {
  const apiCall = useApiCall()
  const { isLoading, callFn } = useLoading<Person>()

  const call = callFn(async (id: number | null) => {
    const result = await apiCall<Person>(`${API_PATH}/${id}`)
    const parsedResult: Person = Zod.Person.parse(result)

    return parsedResult
  })

  return { call, isLoading }
}
