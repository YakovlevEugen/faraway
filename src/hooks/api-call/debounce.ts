import { useEffect, useState } from 'react'

export interface QueryDebounceProps {
  debouncedOn: number
}

export const DEFAULT_DEBOUNCE_PROPS = {
  debouncedOn: 0,
}

export function useDebounce<TValue>(value: TValue, delay = 0): TValue {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}
