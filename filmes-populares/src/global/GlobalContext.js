import { createContext } from 'react'

export const GlobalContext = createContext()

export default function GlobalProvider({ children }) {
  const context = {}

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  )
}
