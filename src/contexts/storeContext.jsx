import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";
import { AuthContextProvider } from "./authContext";
import { MenuContextProvider } from "./menuContext";
const CtxStore = new createContext();

export const UseStore = ({ children }) => {
  const [pro, setPro] = useState(0);

  const up = useCallback((payload) => {
    setPro((pro) => pro + (payload || 1));
  }, [pro]);
  const down = useCallback((payload) => {
    setPro((pro) => pro - (payload || 1));
  }, [pro]);
  const value = useMemo(
    () => ({
      up,
      down,
      pro
    }),
    [up, down, pro]
  );
  return (
    <CtxStore.Provider value={value}>
      <AuthContextProvider>
        <MenuContextProvider>
          {children}
        </MenuContextProvider>
      </AuthContextProvider>
    </CtxStore.Provider>
  );
};


export const useStore = () => {
  const context = useContext(CtxStore);
  if (context === undefined) {
    throw new Error("useStore must be used within a UseStore");
  }
  return context;
};
