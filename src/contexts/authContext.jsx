// Importamos las librerías y archivos necesarios
import { createContext,useCallback, useState, useMemo, useContext } from 'react';

// Importamos la constante MAGIC_WORD
import { MAGIC_WORD } from '../consts';

// Creamos una constante con el nombre de la variable que vamos a guardar en el localStorage
const MY_AUTH_TOKEN = MAGIC_WORD;

// Expoertamos el contexto
// createContext le permite crear un contexto que los componentes pueden proporcionar o leer
// https://react.dev/reference/react/createContext
export const AuthContext = createContext();

// Creamos un componente que va a ser el proveedor del contexto
export const AuthContextProvider = ({children}) => {

    // Configuramos el estado inicial de la variable isAuthenticated
    // useState es un React Hook que le permite agregar una variable de estado a su componente.
    // https://react.dev/reference/react/useState
    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(MY_AUTH_TOKEN) ?? false);

    // Creamos una función para loguear al usuario
    // Llame useCallbackal nivel superior de su componente
    // para almacenar en caché una definición de función entre renderizaciones
    // https://react.dev/reference/react/useCallback
    const login = useCallback(() => {
        window.localStorage.setItem(MY_AUTH_TOKEN, true);
        setIsAuthenticated(true);
    }, []);
    
    // Creamos una función para desloguear al usuario
    const logout = useCallback(() => {
        localStorage.removeItem(MY_AUTH_TOKEN);
        setIsAuthenticated(false);
    }, []);

    // Vamos a crear un objeto con las funciones y variables que vamos a utilizar
    // useMemo es un React Hook que le permite almacenar 
    // en caché el resultado de un cálculo entre renderizaciones.
    // https://react.dev/reference/react/useMemo
    const value = useMemo(() => ({
        login,
        logout,
        isAuthenticated,
    }), [login, logout, isAuthenticated])

    // Devolvemos el componente AuthContext.Provider
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
// Creamos un hook para utilizar el contexto
export const useAuthContext = () => { 
    // Creamos una constante con el contexto
    // useContextes un React Hook que le permite leer y suscribirse al contexto de su componente.
    // useContext acepta un objeto de contexto (el valor devuelto de React.createContext)
    // y devuelve el valor de contexto actual.
    // https://react.dev/reference/react/useContext
    const context = useContext(AuthContext);

    // Si el contexto es undefined lanzamos un error
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthContextProvider');
    }
    // Devolvemos el contexto
    return context;
}




