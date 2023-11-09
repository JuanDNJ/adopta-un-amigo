import { API_URL } from '../consts'
export const getFrontPages = async () => { // Funcion asincrona para obtener las portadas
  try {
    // Fetch para obtener las portadas
    const pages = await fetch(`${API_URL}/pets/front-pages`)
    const record = await pages.json() // Convertir a JSON
    return record // Retornar el JSON
  } catch (err) {
    throw new Error(err.message)
  }
}