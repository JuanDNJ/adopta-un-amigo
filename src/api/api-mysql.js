import { API_URL, MAGIC_WORD } from '../consts'
import moocks from './moock.json'
import { checkError } from '../helpers'

export const getPets = async () => {
  try {
    const response = await fetch(new Request(`${API_URL}/pets`), {
      method: 'GET'
    })
    // infoResponse()
    checkError(response)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    if (error.message === 'Failed to fetch') return moocks.mascotas
    throw new TypeError(error.message) //
  }
}
export const getPet = async (id) => {
  try {
    const response = await fetch(new Request(`${API_URL}/pets/pet/${id}`), {
      method: 'GET'
    })
    // infoResponse()
    checkError(response)
    const data = await response.json()
    return data
  } catch (error) {
    throw new TypeError(error.message) //
  }
}
export const searchPets = async (search) => {
  const response = await fetch(`${API_URL}/pets/${search}`)
  const data = await response.json()
  return data
}

export const selectCatetory = async (catetory) => {
  const response = await fetch(`${API_URL}/pets/category/${catetory}`)
  const data = await response.json()
  return data
}

// get categories

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/categories`,{
    method: 'GET'
  })
  const data = await response.json()
  return data
}

export const authLogin = async (email, password) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  return data
}

export const newAccount = async (user) => {
  const { user_handler, email, password } = user
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user_handler, email, password })
  })
  const data = await response.json()
  return data
}
export const users = {
  getProfile: async () => {
    const response = await fetch(`${API_URL}/users/user/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(MAGIC_WORD)}`
      }
    })
    if (response.status === 401) {
      return { error: 'Unauthorized' }
    }

    const data = await response.json()
    // console.log(data);
    return data
  }

}
export const getFrontPages = async () => { // Funcion asincrona para obtener las portadas
  try {
    // Fetch para obtener las portadas
    const pages = await fetch('http://localhost:5174/front-pages')
    const record = await pages.json() // Convertir a JSON
    return record // Retornar el JSON
  } catch (err) {
    throw new Error(err.message)
  }
}
