import { createContext, useContext, useMemo, useState, useCallback } from 'react'

export const MenuContext = createContext()

export const MenuContextProvider = ({ children }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false)

  const close = useCallback(() => {
    setIsMenuToggle(false)
  }, [])
  const open = useCallback(() => {
    setIsMenuToggle(true)
  }, [])

  const toggle = useCallback(() => {
    setIsMenuToggle(!isMenuToggle)
  }, [isMenuToggle])

  const value = useMemo(() => ({
    isMenuToggle,
    close,
    open,
    toggle
  }), [isMenuToggle, close, open, toggle])

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuContextProvider')
  }

  return context
}
