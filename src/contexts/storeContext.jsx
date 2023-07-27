import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import { AuthContextProvider } from './authContext'
import { MenuContextProvider } from './menuContext'

const CtxStore = createContext()

export const UseStore = ({ children }) => {
  const [isOpenMenuBars, setIsOpenMenuBars] = useState(false)

  const toggleMenuBars = useCallback(() => {
    setIsOpenMenuBars(isOpenMenuBars => !isOpenMenuBars)
  }, [setIsOpenMenuBars])

  const closeMenuBars = useCallback(() => {
    setIsOpenMenuBars(false)
  }, [setIsOpenMenuBars])

  const openMenuBars = useCallback(() => {
    setIsOpenMenuBars(true)
  }, [setIsOpenMenuBars])

  const value = useMemo(
    () => ({
      toggleMenuBars,
      closeMenuBars,
      openMenuBars,
      isOpenMenuBars
    }),
    [isOpenMenuBars, closeMenuBars,
      openMenuBars, toggleMenuBars]
  )

  return (
    <CtxStore.Provider value={value}>
      <AuthContextProvider>
        <MenuContextProvider>
          {children}
        </MenuContextProvider>
      </AuthContextProvider>
    </CtxStore.Provider>
  )
}

export const useStore = () => {
  const context = useContext(CtxStore)
  if (context === undefined) {
    throw new Error('useStore must be used within a UseStore')
  }
  return context
}
