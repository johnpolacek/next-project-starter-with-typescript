import { useState, createContext } from "react"

interface AppContextInterface {
  mode: string
  setMode: (value: string) => void
}
const AppContext = createContext<AppContextInterface | null>(null)

type Props = {
  children: React.ReactNode
}

const AppProvider = ({ children }: Props) => {
  const [mode, setMode] = useState(null)

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
