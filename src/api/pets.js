import { API_URL } from '../consts'
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