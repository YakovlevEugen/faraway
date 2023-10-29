import { createContext, ReactNode } from 'react'

interface Props {
  children?: ReactNode | ReactNode[]
}

export const RootContext = createContext({})

export function RootContextProvider({ children }: Props) {
  return <RootContext.Provider value={{}}>{children}</RootContext.Provider>
}
